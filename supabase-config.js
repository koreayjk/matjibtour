/* =========================================================
   맛집여행 — Supabase 연결 설정
   index.html, admin.html 두 곳에서 함께 사용합니다.
   ========================================================= */
window.MATJIP_SUPABASE = {
  url: "https://idoeoxrmuzkxtgqzunek.supabase.co",
  // anon(publishable) 공개 키 — 홈페이지에 노출되어도 안전한 키입니다.
  key: "sb_publishable_coxFmMeK433stViyDUygtg_x66SlqLa",
  bucket: "matjip-images",
  table: "matjip_content"
};

// 클라이언트 생성 (supabase-js 로드 이후 실행)
(function () {
  try {
    if (window.supabase && window.supabase.createClient) {
      window._matjipSB = window.supabase.createClient(
        window.MATJIP_SUPABASE.url,
        window.MATJIP_SUPABASE.key
      );
    }
  } catch (e) {
    console.warn('Supabase 초기화 실패:', e);
  }
})();
