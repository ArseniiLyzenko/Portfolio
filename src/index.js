'use strict'

import './index.html';
import './styles/index.scss';
// import '@fortawesome/fontawesome-free/js/all.min';

import './icons/at-solid.svg';
import './icons/github-brands.svg';
import './icons/linkedin-brands.svg';

import './scripts/hint';

const impress_DOM_elemnt = document.getElementById('impress');

impress_DOM_elemnt.dataset.height = window.innerHeight;
impress_DOM_elemnt.dataset.width = window.innerWidth;

impress().init();

// if ("ontouchstart" in document.documentElement) {
//
// }

