/* =========================================================
   맛집여행 — 데이터 저장소 (Supabase 대체 / 백엔드 없이 동작)
   브라우저 localStorage에 사이트 내용을 저장합니다.
   index.html, admin.html 두 곳에서 함께 사용합니다.
   ========================================================= */
window.MATJIP_STORE = {
  KEY: "matjip_site_data_v1",

  // 기본 데이터(site-data.js)를 안전하게 정규화
  base: function () {
    var b = window.SITE_DATA || {};
    return {
      hero:    (b.hero && typeof b.hero === 'object' && !Array.isArray(b.hero)) ? b.hero : {},
      about:   Array.isArray(b.about)   ? b.about   : [],
      dishes:  Array.isArray(b.dishes)  ? b.dishes  : [],
      gallery: Array.isArray(b.gallery) ? b.gallery : [],
      events:  Array.isArray(b.events)  ? b.events  : []
    };
  },

  // 저장된 내용 불러오기 (없거나 비어있으면 기본 데이터로 보완)
  load: function () {
    var base = this.base();
    try {
      var raw = localStorage.getItem(this.KEY);
      if (!raw) return base;
      var s = JSON.parse(raw);
      if (!s || typeof s !== 'object') return base;
      return {
        hero:    (s.hero && typeof s.hero === 'object' && !Array.isArray(s.hero) && Object.keys(s.hero).length) ? s.hero : base.hero,
        about:   (Array.isArray(s.about)   && s.about.length)   ? s.about   : base.about,
        dishes:  (Array.isArray(s.dishes)  && s.dishes.length)  ? s.dishes  : base.dishes,
        gallery: (Array.isArray(s.gallery) && s.gallery.length) ? s.gallery : base.gallery,
        events:  (Array.isArray(s.events)  && s.events.length)  ? s.events  : base.events
      };
    } catch (e) {
      console.warn('저장된 데이터 로드 실패, 기본 데이터 사용:', e);
      return base;
    }
  },

  // 내용 저장 (저장공간 초과 시 예외를 그대로 전달)
  save: function (data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }
};
