import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { createClient } from '@supabase/supabase-js';
import { SYSTEM_PROMPT } from '@/lib/ai-system-prompt';

// We use the SERVICE ROLE client to bypass RLS securely from the backend
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
);

// Parse lead data from AI response and save to Supabase
async function extractAndSaveLead(text: string): Promise<string> {
  const leadMatch = text.match(/LEAD_DATA:(.*?):END_LEAD/s);
  if (!leadMatch) return text;

  try {
    const leadData = JSON.parse(leadMatch[1]);
    console.log('[Lead Capture] Saving lead:', leadData.name);

    const { error } = await supabaseAdmin.rpc('submit_contact_form', {
      p_full_name: leadData.name,
      p_email: leadData.email || 'no-email-provided@pending.local',
      p_phone: leadData.phone || null,
      p_company: leadData.company || null,
      p_subject: 'AI Agent Lead',
      p_message: null,
      p_notes: leadData.notes || 'Lead captured via AI agent',
      p_source: 'ai_agent',
    });

    if (error) {
      console.error('[Lead Capture] Supabase error:', error.message);
    } else {
      console.log('[Lead Capture] Lead saved successfully for', leadData.name);
    }
  } catch (e) {
    console.error('[Lead Capture] Parse error:', e);
  }

  // Strip the LEAD_DATA block from the response so the user never sees it
  return text.replace(/LEAD_DATA:.*?:END_LEAD/s, '').trim();
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await generateText({
      model: openai('gpt-4o-mini'),
      system: SYSTEM_PROMPT,
      messages,
    });

    // Extract lead data (if any) and clean the response
    const cleanText = await extractAndSaveLead(result.text);

    return new Response(JSON.stringify({ text: cleanText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('Chat API Error:', err.message);
    return new Response(JSON.stringify({ error: err.message || 'Failed to process chat' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
