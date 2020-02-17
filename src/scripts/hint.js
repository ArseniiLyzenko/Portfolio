const hint = document.querySelector(".hint");

if ("ontouchstart" in document.documentElement) {
  hint.innerHTML = "Swipe up to start";
} else {
  hint.innerHTML ="Use a spacebar or arrow keys to navigate";
}
