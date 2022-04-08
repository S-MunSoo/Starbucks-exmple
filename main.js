const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const badgeEl = document.querySelector("header .badges");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// blur 반대되는 속성 focus 가 해재될 경우
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 날개 배너가 스크롤되면 사라지게 되는 함수 호출 Window는 창을 의미한다
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소,지속시간,옵션);

      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이지
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
      });
    }
  }, 300)
);
// _.throttle(함수,시간)
