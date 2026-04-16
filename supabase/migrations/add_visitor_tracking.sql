-- Migration: Update page_visitors table for real visitor tracking
-- Run this in your Supabase SQL Editor

-- Add new columns to the existing page_visitors table
ALTER TABLE public.page_visitors 
  ADD COLUMN IF NOT EXISTS visitor_id TEXT,
  ADD COLUMN IF NOT EXISTS page_path TEXT DEFAULT '/',
  ADD COLUMN IF NOT EXISTS ip_address TEXT,
  ADD COLUMN IF NOT EXISTS user_agent TEXT;

-- Create index on visitor_id for fast unique visitor queries
CREATE INDEX IF NOT EXISTS idx_page_visitors_visitor_id ON public.page_visitors (visitor_id);

-- Create index on visited_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_page_visitors_visited_at ON public.page_visitors (visited_at);

-- Create index on page_path for per-page analytics
CREATE INDEX IF NOT EXISTS idx_page_visitors_page_path ON public.page_visitors (page_path);
