-- Create Table
CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('black', 'flavoured', 'green')),
    image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public can view products"
    ON public.products FOR SELECT
    USING (true);

-- Allow authenticated users true CRUD
CREATE POLICY "Auth users can insert products"
    ON public.products FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Auth users can update products"
    ON public.products FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Auth users can delete products"
    ON public.products FOR DELETE
    USING (auth.role() = 'authenticated');


-- Create Storage Bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('products', 'products', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies
CREATE POLICY "Public Access Products" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'products' );

CREATE POLICY "Admin Upload Access Products" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'products' AND auth.role() = 'authenticated' );

CREATE POLICY "Admin Delete Access Products" 
ON storage.objects FOR DELETE 
USING ( bucket_id = 'products' AND auth.role() = 'authenticated' );


-- Seed Legacy Data
INSERT INTO public.products (name, category, image) VALUES
    ('Pekoe', 'black', '/products/pekoe.png'),
    ('Pekoe 1', 'black', '/products/pekoe-1.png'),
    ('OPA', 'black', '/products/OPA.png'),
    ('OP 1', 'black', '/products/OP1.png'),
    ('Dust', 'black', '/products/DUST.png'),
    ('BOPF', 'black', '/products/BOPF.png'),
    ('BOP', 'black', '/products/BOP.png'),
    ('BOP 1', 'black', '/products/BOP1.png'),
    ('BOP 1A', 'black', '/products/BOP1A.png'),
    ('Broken Mix', 'black', '/products/BM-tea.png'),
    ('FGS 1', 'black', '/products/FGS1.png'),
    ('FBOP', 'black', '/products/FBOP.png'),
    ('FBOP F1', 'black', '/products/FBOPF1.png'),
    ('FBOP F SP', 'black', '/products/FBOPFSP.png'),
    ('FBOP FEX SP1', 'black', '/products/FBOP FEX SP1.png'),

    ('GT Earl Grey', 'flavoured', '/products/earl grey 3.jpg'),
    ('1001 Nights', 'flavoured', '/products/1001 nghts 7.jpg'),
    ('Wild Berry', 'flavoured', '/products/very berry 8.jpg'),
    ('Strawberry', 'flavoured', '/products/strawberry 10.jpg'),
    ('Ginger Lemon', 'flavoured', '/products/ginger lemon 12.jpg'),
    ('Lady Grey', 'flavoured', '/products/lady grey 14.jpg'),
    ('Apple', 'flavoured', '/products/apple 15.jpg'),
    ('Rose', 'flavoured', '/products/rose 16.jpg'),
    ('Masala Mix', 'flavoured', '/products/masala 17.jpg'),
    ('BT Earl Grey', 'flavoured', '/products/earl grey bt 18.jpg'),

    ('Gun Powder Special', 'green', '/products/GP-SPECIAL.png'),
    ('GT Curl', 'green', '/products/GREEN-TEA-CURL.png'),
    ('GT Chunmee', 'green', '/products/Gt-Chumnee.png'),
    ('GTFF1', 'green', '/products/GTFF1.png'),
    ('Gun Powder', 'green', '/products/GUN-POWDER-1.png'),
    ('Young Hyson', 'green', '/products/young-hyson.png');
