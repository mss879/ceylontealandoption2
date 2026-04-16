-- Create the storage bucket for newsroom images
INSERT INTO storage.buckets (id, name, public)
VALUES ('newsroom', 'newsroom', true);

-- Allow public access to read files
CREATE POLICY "Newsroom Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'newsroom' );

-- Allow authenticated admins to upload files
CREATE POLICY "Newsroom Admin Upload"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'newsroom' AND auth.role() = 'authenticated' );

-- Allow authenticated admins to delete files
CREATE POLICY "Newsroom Admin Delete"
ON storage.objects FOR DELETE
USING ( bucket_id = 'newsroom' AND auth.role() = 'authenticated' );

-- Allow authenticated admins to update/replace files
CREATE POLICY "Newsroom Admin Update"
ON storage.objects FOR UPDATE
USING ( bucket_id = 'newsroom' AND auth.role() = 'authenticated' );
