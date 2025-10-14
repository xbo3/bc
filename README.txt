wooss2 · 완성본(drop-in v3)
===========================
이 폴더 그대로 기존 사이트 최상위에 덮어쓰면 끝입니다.

필수 마크업
----------
1) 케어 버튼
   <button id="careToggle">케어</button>

2) 히어로 래퍼(1·2·3)
   <section id="heroWrap">
     <div class="hero">...</div>
     <div class="hero">...</div>
     <div class="hero">...</div>
   </section>

3) 노란박스 이미지(확장자 자동탐지)
   <img class="auto-ext" data-src-base="/assets/promo/quiz-coupon" alt="퀴즈만점! 쿠폰만점!">

링크 추가
--------
<head>에 CSS, </body> 직전에 JS 추가
<link rel="stylesheet" href="/css/styles.css">
<script src="/js/main.js"></script>

요청 반영
--------
- 로고 폭 25% 증가(scale 1.25)
- 히어로 1·2·3 높이 50% 증가(폭 불변)
- 케어 클릭 시 히어로 슬라이드 토글(느리게), 상태 저장(localStorage)
- quiz-coupon.(png|jpg|jpeg|webp) 자동 탐지로 노란박스 이미지 노출 문제 해결
