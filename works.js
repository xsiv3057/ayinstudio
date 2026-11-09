// 작업 목록: 새 작업을 추가하려면 맨 위에 한 줄을 넣으면 됩니다.
// yt = 유튜브 영상 ID (주소의 v= 뒤 11글자), cat = 분류, featured = 대표작 영역에 노출
window.CATEGORIES = [
  { key: "all", label: "전체" },
  { key: "event", label: "행사 · 스케치" },
  { key: "promo", label: "홍보 · 소개" },
  { key: "public", label: "공공 · 교육" },
  { key: "short", label: "숏폼" },
  { key: "drama", label: "드라마 · 방송" },
  { key: "stage", label: "공연 · 뮤직비디오" }
];

window.WORKS = [
  { yt: "di51LEc3ack", year: 2026, cat: "event", featured: 1,
    title: "청소년 사회적경제 한마당", client: "강원특별자치도교육청", role: "행사 실황 촬영 · 영상 제작" },
  { yt: "Uk8y-vo-FIY", year: 2025, cat: "promo", featured: 2,
    title: "총학생회 · 대의원회 · 신문방송국 소개 영상", client: "숭의여자대학교", role: "기획 · 촬영 · 편집" },
  { yt: "iqnLo9poWuM", year: 2024, cat: "event", featured: 3,
    title: "왔수유페스타 행사 스케치", client: "서울 강북구", role: "촬영 · 편집" },
  { yt: "eiOs0vbwFcI", year: 2021, cat: "public", featured: 4,
    title: "찾아가는 4대 사회보험", client: "국민연금공단 · 국민연금TV", role: "촬영 · 편집" },
  { yt: "TV8OQK-U5pA", year: 2023, cat: "short", featured: 5,
    title: "「내돈내살」 숏폼 시리즈 (8편)", client: "국민연금공단 중앙노후준비지원센터", role: "촬영 · 편집" },
  { yt: "_DgWVUwCXXY", year: 2025, cat: "event", featured: 6,
    title: "ACSI Music Camp 스케치", client: "ACSI", role: "스케치 영상 · 공연 실황 촬영 · 편집" },

  { yt: "gJ7YFowH8K0", year: 2023, cat: "promo",
    title: "총학생회 소개 영상", client: "숭의여자대학교", role: "기획 · 촬영 · 편집" },
  { yt: "takm3WlwaFQ", year: 2023, cat: "promo",
    title: "대의원회 소개 영상", client: "숭의여자대학교", role: "기획 · 촬영 · 편집" },
  { yt: "JpqSdUV9tTg", year: 2023, cat: "promo",
    title: "신문방송국 소개 영상", client: "숭의여자대학교", role: "기획 · 촬영 · 편집" },
  { yt: "7lq-GhrkT-U", year: 2023, cat: "promo",
    title: "부서 소개 · 통합학부사무실 안내", client: "숭의여자대학교", role: "기획 · 촬영 · 편집" },
  { yt: "cJSY33pfY58", year: 2021, cat: "public",
    title: "독일연금 쉽게 받는 꿀팁", client: "국민연금공단 · 국민연금TV", role: "촬영 · 편집" },
  { yt: "BQG2ShR4Jq0", year: 2021, cat: "public",
    title: "외국보험료 면제 받는 꿀팁", client: "국민연금공단 · 국민연금TV", role: "촬영 · 편집" },
  { yt: "7FgK8-PZOZw", year: 2023, cat: "short",
    title: "「내돈내살」 ② 40년 모아야 10억이라고?!", client: "국민연금공단 중앙노후준비지원센터", role: "촬영 · 편집" },
  { yt: "nX7C0hL-zNo", year: 2023, cat: "short",
    title: "「내돈내살」 ③ 최소 비용으로 최대 만족", client: "국민연금공단 중앙노후준비지원센터", role: "촬영 · 편집" },
  { yt: "fXGKO2i4WpY", year: 2020, cat: "drama",
    title: "「예수가 길이다」", client: "CTS · C채널 방영", role: "촬영 · 편집" },
  { yt: "SShc8JMTiKs", year: 2024, cat: "stage",
    title: "Time Is Running Out (Cover)", client: "감탄밴드", role: "공연 영상 촬영 · 편집" },
  { yt: "1jqaq0w6fo4", year: 2024, cat: "stage",
    title: "Hysteria (Cover)", client: "감탄밴드", role: "공연 영상 촬영 · 편집" },
  { yt: "dGVmiQT6ti0", year: 2023, cat: "stage",
    title: "뮤지컬 「베들레헴에 오신 메시아」", client: "더빛플러스", role: "공연 실황 촬영 · 편집" },
  { yt: "T8pVHND5Hds", year: 2023, cat: "stage",
    title: "뮤직비디오 「물방울의 노래」", client: "더빛플러스", role: "연출 · 촬영 · 편집" },
  { yt: "U4JDdsMtcSo", year: 2023, cat: "stage",
    title: "뮤직비디오 「New Day」", client: "더빛플러스", role: "연출 · 촬영 · 편집" },
  { yt: "04bJzn79NiE", year: 2023, cat: "drama",
    title: "드라마 「스크루테이프의 편지」 EP.4", client: "더빛플러스", role: "연출 · 촬영 · 편집" },
  { yt: "kQPmPguDYoE", year: 2023, cat: "drama",
    title: "드라마 「스크루테이프의 편지」 EP.5", client: "더빛플러스", role: "연출 · 촬영 · 편집" }
];

// 영상 링크 없이 이력으로만 싣는 작업
window.CREDITS = [
  { year: 2024, title: "전통시장 상인 교육 영상", client: "서울 강북구청" },
  { year: 2022, title: "60주년 다큐 드라마 「그 기억의 시간 속으로」 메이킹 필름", client: "MG새마을금고" },
  { year: 2021, title: "단편 영화 「물방울」 촬영 · 편집", client: "미국 5개 영화제 6회 수상" },
  { year: 2020, title: "내부 교육 강의 영상", client: "국민연금공단" },
  { year: 2020, title: "온라인 수업 · 특강 영상", client: "숭의여자대학교" }
];
