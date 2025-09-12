import { get } from "../init/init.js";
const navItems = [
  "홈",
  "인기",
  "쇼핑수다",
  "집꾸미기",
  "취미/일상",
  "오집소식",
  "추천",
  "집들이",
];

const $headerNavArea = get(".header_nav");

export const headerNavUi = () => {
  const $ulEl = document.createElement("ul");

  const menuLIst = navItems
    .map((menu) => {
      return `<li>${menu}</li>`;
    })
    .join("");
  $ulEl.innerHTML = menuLIst;
  $headerNavArea.appendChild($ulEl);
};
