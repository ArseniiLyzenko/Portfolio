"use strict";

import "../index.html";
import "../styles/index.scss";

import "../icons/at-solid.svg";
import "../icons/github-brands.svg";
import "../icons/linkedin-brands.svg";

/*
* impress.js
* */
import "../libraries/impress/impress";

/*
* Utilities for impress.js
* */
import "../libraries/impress/lib/util";
import "../libraries/impress/lib/gc";

/*
* Plugins for impress.js
* */
import "../libraries/impress/plugins/navigation/navigation";
import "../libraries/impress/plugins/mobile/mobile";
import "../libraries/impress/plugins/resize/resize";
// import "../libraries/impress/plugins/touchY/touchY";
import "../libraries/impress/plugins/touch/touch";

/*
* Scripts
* */
import "./hint";

const impress_DOM_element = document.getElementById("impress");

/*
* Setting up width and height for impress.js
* */

if (window.innerWidth > 768) {
  const coefficient = 1.5;
  impress_DOM_element.dataset.height = window.innerHeight * coefficient;
  impress_DOM_element.dataset.width = window.innerWidth * coefficient;
}

// impress_DOM_element.dataset.height = impress_DOM_element.dataset.width =
//   window.innerHeight > window.innerWidth
//     ? window.innerHeight
//     : window.innerWidth;

impress().init();

// if ("ontouchstart" in document.documentElement) {
//
// }
// console.log(impress_DOM_element);
// debugger
