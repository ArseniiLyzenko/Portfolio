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

// import "../favicons/android-chrome-192x192.png";
// import "../favicons/android-chrome-512x512.png";
// import "../favicons/apple-touch-icon.png";
// import "../favicons/favicon-16x16.png";
// import "../favicons/favicon-32x32.png";
import "../favicons/favicon.ico";
// import "../favicons/site.webmanifest";

/*
* Setting up width and height for impress.js
* */
const impress_DOM_element = document.getElementById("impress");

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
