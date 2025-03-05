const frame = document.querySelector("#circle");
const list = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

const len = list.length;
const deg = 36; // 각 슬라이드마다 90도 회전
let num = 0; // 현재 회전 각도
let active = 0; // active 변수를 여기서 선언하고 초기화합니다.

prev.addEventListener("click", () => {
  num += deg; // 오른쪽으로 회전
  frame.style.transform = `rotateY(${num}deg)`;
  active === 0 ? (active = len - 1) : active--;
  for (let el of list) el.classList.remove("on"); // 모든 슬라이드에서 'on' 클래스 제거
  list[active].classList.add("on"); // 현재 활성화된 슬라이드에 'on' 클래스 추가
});

next.addEventListener("click", () => {
  num -= deg; // 왼쪽으로 회전
  frame.style.transform = `rotateY(${num}deg)`;
  active === len - 1 ? (active = 0) : active++;
  for (let el of list) el.classList.remove("on"); // 모든 슬라이드에서 'on' 클래스 제거
  list[active].classList.add("on"); // 현재 활성화된 슬라이드에 'on' 클래스 추가
});
