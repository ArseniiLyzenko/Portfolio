const hint = document.querySelector(".hint");

if ("ontouchstart" in document.documentElement) {
  hint.innerHTML = "Swipe left to start";
} else {
  hint.innerHTML ="Use a spacebar or arrow keys to navigate";
}
