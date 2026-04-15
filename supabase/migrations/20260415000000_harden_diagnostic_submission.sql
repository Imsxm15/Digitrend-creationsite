alter table public.diagnostic_requests
  add column if not exists submission_source text not null default 'website',
  add column if not exists request_fingerprint text;

create index if not exists diagnostic_requests_request_fingerprint_created_at_idx
  on public.diagnostic_requests (request_fingerprint, created_at desc)
  where request_fingerprint is not null;

drop policy if exists "Public can insert diagnostic requests"
  on public.diagnostic_requests;

revoke insert on public.diagnostic_requests from anon, authenticated;
