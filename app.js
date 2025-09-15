import { getData } from "./js/init/api.js";
import { headerNavUi } from "./js/components/header.js";
import { bannerSliderUi } from "./js/components/slider.js";

(() => {
  "use strict";

  const init = async () => {
    await getData();
    headerNavUi();
    bannerSliderUi();
  };
  init();
})();
