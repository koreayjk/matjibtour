-- ============================================================
--  맛집여행 홈페이지 — Supabase 설정 SQL
--  사용법: Supabase 대시보드 → 왼쪽 메뉴 SQL Editor →
--          New query → 아래 전체를 복사해 붙여넣고 → Run(실행)
--  (교회 홈페이지와 같은 프로젝트에 써도 이름이 달라 안 섞입니다)
-- ============================================================

-- 1) 데이터 테이블 생성 -------------------------------------
--    section 컬럼: 'dishes'(대표메뉴) / 'gallery'(매장사진) / 'events'(이벤트)
--    payload 컬럼: 해당 섹션의 데이터(JSON)를 통째로 저장
create table if not exists public.matjip_content (
  section    text primary key,
  payload    jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

-- 2) 행 미리 만들어 두기 (없으면 빈 값으로) -------------------
insert into public.matjip_content (section, payload)
values ('hero',    '{}'::jsonb),
       ('about',   '[]'::jsonb),
       ('dishes',  '[]'::jsonb),
       ('gallery', '[]'::jsonb),
       ('events',  '[]'::jsonb)
on conflict (section) do nothing;

-- 3) RLS(접근 권한) 설정 -------------------------------------
--    홈페이지(손님)는 읽기만, 누구나 읽기 가능.
--    저장(쓰기)도 anon 키로 가능하게 허용 (관리자 페이지에서 비번 2414로 보호).
alter table public.matjip_content enable row level security;

drop policy if exists "matjip read"  on public.matjip_content;
drop policy if exists "matjip write" on public.matjip_content;
drop policy if exists "matjip update" on public.matjip_content;

create policy "matjip read"
  on public.matjip_content for select
  using (true);

create policy "matjip write"
  on public.matjip_content for insert
  with check (true);

create policy "matjip update"
  on public.matjip_content for update
  using (true) with check (true);

-- 4) Storage 버킷 생성 (사진 저장소) --------------------------
insert into storage.buckets (id, name, public)
values ('matjip-images', 'matjip-images', true)
on conflict (id) do nothing;

-- 5) Storage 권한: 누구나 보기 / 업로드 / 교체 / 삭제 가능 ------
drop policy if exists "matjip img read"   on storage.objects;
drop policy if exists "matjip img insert" on storage.objects;
drop policy if exists "matjip img update" on storage.objects;
drop policy if exists "matjip img delete" on storage.objects;

create policy "matjip img read"
  on storage.objects for select
  using (bucket_id = 'matjip-images');

create policy "matjip img insert"
  on storage.objects for insert
  with check (bucket_id = 'matjip-images');

create policy "matjip img update"
  on storage.objects for update
  using (bucket_id = 'matjip-images');

create policy "matjip img delete"
  on storage.objects for delete
  using (bucket_id = 'matjip-images');

-- ============================================================
--  완료! "Success. No rows returned" 가 나오면 정상입니다.
-- ============================================================
