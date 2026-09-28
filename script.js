// 해결카드 내용 (여기만 바꾸면 카드 내용이 바뀌어요)
const solutions = [
  {
    title: "두물머리 입지",
    desc: "두 강이 만나는 두물머리에서 자연을 가까이 느껴요.",
  },
  {
    title: "한국식 자연농업",
    desc: "땅을 살리는 한국식 자연농업을 직접 체험해요.",
  },
  {
    title: "주 4일 · 1회 3만원",
    desc: "주 4일 운영, 1회 3만원으로 참여할 수 있어요.",
  },
];

// 카드 컴포넌트: 내용(title, desc)을 받아 카드 하나를 만들어요
function SolutionCard({ number, title, desc }) {
  const card = document.createElement("article");
  card.className = "card";

  const num = document.createElement("span");
  num.className = "card__num";
  num.textContent = number;

  const h3 = document.createElement("h3");
  h3.className = "card__title";
  h3.textContent = title;

  const p = document.createElement("p");
  p.className = "card__desc";
  p.textContent = desc;

  card.append(num, h3, p);
  return card;
}

// 같은 컴포넌트를 3번 반복해서 화면에 붙여요
const cardBox = document.getElementById("solution-cards");
solutions.forEach((item, i) => {
  cardBox.append(SolutionCard({ number: i + 1, ...item }));
});
