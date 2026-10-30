-- Endurece contact_messages: solo el rol anon puede INSERTAR, con límites de tamaño.
-- Ejecutar en el SQL Editor de Supabase.

alter table public.contact_messages enable row level security;

-- Elimina políticas abiertas previas (revisa los nombres en Authentication > Policies)
-- drop policy if exists "<nombre>" on public.contact_messages;

revoke all on public.contact_messages from anon, authenticated;
grant insert on public.contact_messages to anon;

drop policy if exists "anon_insert_contact" on public.contact_messages;
create policy "anon_insert_contact"
  on public.contact_messages
  for insert
  to anon
  with check (true);

alter table public.contact_messages
  add constraint contact_name_len    check (char_length(name) between 2 and 100),
  add constraint contact_email_len   check (char_length(email) between 5 and 254),
  add constraint contact_phone_len   check (phone is null or char_length(phone) between 7 and 10),
  add constraint contact_message_len check (char_length(message) between 10 and 3000);
