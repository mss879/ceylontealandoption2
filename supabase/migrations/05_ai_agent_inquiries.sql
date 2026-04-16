-- Migration: Add AI Agent lead tracking columns to inquiries and create submit contact form RPC

-- 1. Add extra fields to the existing `inquiries` table
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS company TEXT;
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS notes TEXT;
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'website';

-- 2. Create the submit_contact_form RPC
-- This acts as an automated entry way for AI Agent or other server-side triggers 
-- bypassing regular RLS from a trusted context.
CREATE OR REPLACE FUNCTION public.submit_contact_form(
    p_full_name TEXT,
    p_email TEXT,
    p_phone TEXT DEFAULT NULL,
    p_company TEXT DEFAULT NULL,
    p_subject TEXT DEFAULT NULL,
    p_message TEXT DEFAULT NULL,
    p_notes TEXT DEFAULT NULL,
    p_source TEXT DEFAULT 'website'
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_inquiry_id UUID;
BEGIN
    INSERT INTO public.inquiries (
        name, 
        email, 
        message, 
        phone, 
        company, 
        notes, 
        source
    ) VALUES (
        p_full_name, 
        p_email, 
        CASE WHEN p_subject IS NOT NULL THEN (p_subject || ': ' || COALESCE(p_message, '')) ELSE p_message END, 
        p_phone, 
        p_company, 
        p_notes, 
        p_source
    ) RETURNING id INTO v_inquiry_id;

    RETURN v_inquiry_id;
END;
$$;
