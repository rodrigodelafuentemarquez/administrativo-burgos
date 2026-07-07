create table if not exists public.study_state (
  id text primary key,
  state jsonb not null default '{"version":1,"keys":{}}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.study_state enable row level security;

drop policy if exists "study_state_select_rodrigo" on public.study_state;
drop policy if exists "study_state_insert_rodrigo" on public.study_state;
drop policy if exists "study_state_update_rodrigo" on public.study_state;

create policy "study_state_select_rodrigo"
  on public.study_state
  for select
  to anon
  using (id = 'rodrigo');

create policy "study_state_insert_rodrigo"
  on public.study_state
  for insert
  to anon
  with check (id = 'rodrigo');

create policy "study_state_update_rodrigo"
  on public.study_state
  for update
  to anon
  using (id = 'rodrigo')
  with check (id = 'rodrigo');
