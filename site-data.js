/* =========================================================
   맛집여행 — 사이트 데이터 (관리자 페이지에서 수정)
   이 파일은 관리자 페이지(admin.html)에서 자동으로 생성·교체됩니다.
   직접 수정하지 마세요.
   ========================================================= */
window.SITE_DATA = {
  // ── 첫 화면(히어로): 큰 대표 사진 + 추천 카드 ──
  hero: {
    img: "assets/dish-jjokgalbi.png",   // 큰 원형 대표 사진
    badge: "사장 추천 메뉴",
    cardImg: "assets/dish-jjokgalbi.png", // 카드 안 작은 사진
    name: "매운 쪽갈비 정식",
    rating: "4.9",
    desc: "매콤달콤 단골 1순위, 든든한 정식",
    price: "10,900원"
  },

  // ── 소개(About) 영역 매장 사진 4장 ──
  about: [
    { img: "assets/banner-full.png",       caption: "매장 외관 / 간판" },
    { img: "assets/menu-board.png",        caption: "주방 정성스러운 준비" },
    { img: "assets/menu-illustration.png", caption: "매장 내부 분위기" },
    { img: "assets/dish-jjokgalbi.png",    caption: "주인장 인사" }
  ],

  // ── 대표 메뉴 (사진 · 이름 · 가격 · 설명) ──
  dishes: [
    { img: "assets/dish-jjokgalbi.png", name: "매운 쪽갈비 정식", price: "10,900원", desc: "매콤달콤 양념에 푹 졸인 부드러운 쪽갈비, 든든한 정식 한 상", badge: "사장 추천", badgeType: "boss" },
    { img: "assets/dish-ramen.png",     name: "한돈 제육 + 계란찜", price: "10,900원", desc: "국산 한돈 제육에 폭신한 계란찜까지 — 단골 1순위 조합", badge: "인기 메뉴", badgeType: "pop" },
    { img: "",                           name: "소불고기", price: "9,900원", desc: "달큰한 양념에 잘 재운 부드러운 소불고기 한 그릇", badge: "", badgeType: "" },
    { img: "",                           name: "고등어구이", price: "9,900원", desc: "노릇하게 구워낸 고등어, 따끈한 공기밥과 환상의 짝꿍", badge: "", badgeType: "" },
    { img: "",                           name: "맛집 백반", price: "8,900원", desc: "매일 바뀌는 정성 가득한 반찬으로 차려내는 일품 백반", badge: "아침식사", badgeType: "morning" },
    { img: "",                           name: "차돌 된장찌개", price: "8,900원", desc: "진하게 우려낸 된장 국물에 차돌박이가 듬뿍, 속이 풀리는 한 그릇", badge: "", badgeType: "" },
    { img: "assets/dish-kangjeong.png", name: "수제 닭강정", price: "6,900원", desc: "바삭하게 튀겨낸 닭강정, 단골 포장 1순위", badge: "포장 1순위", badgeType: "pop" },
    { img: "assets/dish-kimbap.png",    name: "수제 김밥", price: "4,900원", desc: "매일 아침 직접 마는 정성 가득 김밥, 포장 1순위", badge: "NEW", badgeType: "new" }
  ],

  // ── 매장 사진 갤러리 ──
  gallery: [
    { img: "assets/dish-jjokgalbi.png",    caption: "대표 메뉴 클로즈업" },
    { img: "assets/menu-board.png",        caption: "매장 한 코너" },
    { img: "assets/dish-picnic.png",       caption: "반찬 모음" },
    { img: "assets/dish-kimbap.png",       caption: "김밥 만드는 손" },
    { img: "assets/dish-kangjeong.png",    caption: "컵과일" },
    { img: "assets/menu-illustration.png", caption: "손님들 식사 모습" }
  ],

  // ── 이벤트 · 소식 (사진 · 태그 · 제목 · 날짜) ──
  events: [
    { img: "assets/prepaid-poster.png", tag: "이벤트", title: "10만원 선불권 구매 시 1만원 추가 적립 이벤트", date: "2026.05.10" },
    { img: "assets/dish-kangjeong.png", tag: "신메뉴", title: "🚩오늘의 수제닭강정 나왔습니다🎁😊💕", date: "2026.05.13" },
    { img: "assets/dish-kimbap.png",    tag: "신메뉴", title: "🎁신선한 수제컵과일 출시됐어요💕", date: "2026.04.07" }
  ]
};
