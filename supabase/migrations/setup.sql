-- Create events table
CREATE TABLE public.events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    year INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Enable read access for all users" ON public.events FOR SELECT USING (true);

-- Allow authenticated users (admin) full access
CREATE POLICY "Enable full access for authenticated users" ON public.events FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Insert existing events data
INSERT INTO public.events (title, image, year) VALUES
    ('WORLD FOOD RUSSIA 2020', '/WORLD FOOD RUSSIA 2020.png', 2020),
    ('WORLD FOOD RUSSIA 2021', '/WORLD FOOD RUSSIA 2021.png', 2021),
    ('PRODEXPO MOSCOW RUSSIA 2022', '/PRODEXPO MOSCOW RUSSIA 2022.png', 2022),
    ('GULFOOD DUBAI U.A.E 2022', '/GULFOOD DUBAI U.A.E 2022.png', 2022),
    ('IFE EXCEL, LONDON MARCH 2022', '/IFE EXCEL, LONDON MARCH 2022.jpg', 2022),
    ('HORECA LEBANON MARCH 2022', '/HORECA LEBANON MARCH 2022.jpg', 2022),
    ('POLAND WARZSAW APRIL 2022', '/POLAND WARZSAW APRIL 2022.jpg', 2022),
    ('CANADA MONTREAL APRIL 2022', '/CANADA MONTREAL APRIL 2022.jpg', 2022),
    ('INTER FOOD AZERBAIJAN 2022', '/INTER FOOD AZERBAIJAN 2022.jpg', 2022);

-- Create inquiries table
CREATE TABLE public.inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT,
    email TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public insert
CREATE POLICY "Enable insert access for public" ON public.inquiries FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read and manage inquiries
CREATE POLICY "Enable full access for authenticated users on inquiries" ON public.inquiries FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Insert some mock inquiries
INSERT INTO public.inquiries (name, email, message) VALUES
    ('John Doe', 'john@example.com', 'Interested in bulk ordering Ceylon Tea.'),
    ('Alice Smith', 'alice@tea-distributors.com', 'Do you ship directly to the US?');

-- Create page_visitors table to track visitors (dummy data for the dashboard)
CREATE TABLE public.page_visitors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    visited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.page_visitors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert visitors" ON public.page_visitors FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read visitors" ON public.page_visitors FOR SELECT USING (auth.role() = 'authenticated');

-- Some mock data for today
INSERT INTO public.page_visitors (visited_at) VALUES 
    (NOW() - interval '1 hour'),
    (NOW() - interval '2 hours'),
    (NOW() - interval '3 hours'),
    (NOW() - interval '4 hours'),
    (NOW() - interval '5 hours');
