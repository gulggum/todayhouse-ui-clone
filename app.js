import { getData } from "./js/init/api.js";
import { headerNavUi } from "./js/components/header.js";

(() => {
  "use strict";

  const init = async () => {
    await getData();
    headerNavUi();
  };
  init();
})();
