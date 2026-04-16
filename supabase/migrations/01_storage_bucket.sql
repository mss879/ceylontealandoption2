-- Create the storage bucket for events
insert into storage.buckets (id, name, public) 
values ('events', 'events', true);

-- Allow public access to read files
create policy "Public Access" 
on storage.objects for select 
using ( bucket_id = 'events' );

-- Allow authenticated admins to upload files
create policy "Admin Upload Access" 
on storage.objects for insert 
with check ( bucket_id = 'events' and auth.role() = 'authenticated' );

-- Allow authenticated admins to delete files
create policy "Admin Delete Access" 
on storage.objects for delete 
using ( bucket_id = 'events' and auth.role() = 'authenticated' );

-- Allow authenticated admins to update/replace files
create policy "Admin Update Access" 
on storage.objects for update
using ( bucket_id = 'events' and auth.role() = 'authenticated' );
