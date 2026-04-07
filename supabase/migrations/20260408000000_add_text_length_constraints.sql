-- Add text length constraints to diagnostic_requests for input safety

alter table public.diagnostic_requests
  add constraint diagnostic_requests_company_length
    check (company is null or char_length(company) < 500);

alter table public.diagnostic_requests
  add constraint diagnostic_requests_context_length
    check (context is null or char_length(context) < 500);

alter table public.diagnostic_requests
  add constraint diagnostic_requests_friction_length
    check (friction is null or char_length(friction) < 500);

alter table public.diagnostic_requests
  add constraint diagnostic_requests_message_length
    check (char_length(message) < 10000);

alter table public.diagnostic_requests
  add constraint diagnostic_requests_name_length
    check (char_length(name) < 200);

alter table public.diagnostic_requests
  add constraint diagnostic_requests_email_length
    check (char_length(email) < 320);
