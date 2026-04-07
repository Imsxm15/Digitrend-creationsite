create extension if not exists pgcrypto with schema extensions;

drop view if exists public.contact_leads cascade;
drop table if exists public.contact_submission_events cascade;
drop table if exists public.contact_submissions cascade;
drop table if exists public.diagnostic_requests cascade;

create table public.diagnostic_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(btrim(name)) > 0),
  email text not null check (char_length(btrim(email)) > 0),
  company text,
  context text,
  friction text,
  message text not null check (char_length(btrim(message)) > 0),
  status text not null default 'new' check (status in ('new', 'reviewed', 'archived'))
);

comment on table public.diagnostic_requests is 'Lead capture table for diagnostic requests submitted from the public Digitrend Creation website.';
comment on column public.diagnostic_requests.status is 'Internal processing state managed outside the public form.';

create index diagnostic_requests_created_at_idx
  on public.diagnostic_requests (created_at desc);

create index diagnostic_requests_email_idx
  on public.diagnostic_requests (lower(email));

alter table public.diagnostic_requests enable row level security;

revoke all on public.diagnostic_requests from anon, authenticated;
grant insert on public.diagnostic_requests to anon, authenticated;

create policy "Public can insert diagnostic requests"
  on public.diagnostic_requests
  for insert
  to anon, authenticated
  with check (true);
