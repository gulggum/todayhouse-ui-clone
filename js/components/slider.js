import { get, getAll } from "../init/init.js";
const adBannerUrls = [
  "https://image.ohousecdn.com/i/bucketplace-v2-development/uploads/banners/home_banner/171291179572283830.png?w=1029",
  "https://image.ohousecdn.com/i/bucketplace-v2-development/uploads/banners/home_banner/171653627333193094.png?w=1029",
  "https://image.ohousecdn.com/i/bucketplace-v2-development/uploads/banners/home_banner/172742585500791683.jpg?w=1029",
];

const $bannerWrap = get(".banner_wrap");

export const bannerSliderUi = () => {
  //배너 img삽입
  const bannerimgs = adBannerUrls
    .map((url) => {
      return `<img src="${url}" alt="배너이미지"/>`;
    })
    .join("");
  $bannerWrap.innerHTML = bannerimgs;

  const $sliderImgs = getAll(".banner_wrap img");

  //슬라이드 이벤트
  const totalSliderIndex = $sliderImgs.length;
  let currentIndex = 0;

  const onSlider = (index) => {
    if (index < 0 || index >= totalSliderIndex) return;
    currentIndex = index;
    $bannerWrap.style.transform = `translateX(-${33.3 * currentIndex}%)`;
    console.log(`translateX(-${100 * currentIndex}%)`);
  };

  setInterval(() => {
    onSlider((currentIndex + 1) % totalSliderIndex);
  }, 3000);
};
