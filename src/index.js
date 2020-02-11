"use strict";

import "./index.html";
import "./styles/index.scss";
// import '@fortawesome/fontawesome-free/js/all.min';

import "./icons/at-solid.svg";
import "./icons/github-brands.svg";
import "./icons/linkedin-brands.svg";

import "./scripts/hint";

const impress_DOM_element = document.getElementById("impress");

// impress_DOM_element.dataset.height = window.innerHeight;
// impress_DOM_element.dataset.width = window.innerWidth;

impress_DOM_element.dataset.height = impress_DOM_element.dataset.width =
  window.innerHeight < window.innerWidth
    ? window.innerHeight
    : window.innerWidth;

impress().init();

// if ("ontouchstart" in document.documentElement) {
//
// }
// console.log(impress_DOM_element);
// debugger
