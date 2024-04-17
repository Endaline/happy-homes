const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const list = document.getElementById("item-list");

const itemWidth = 150;
const padding = 10;

prev.addEventListener("click", () => {
  setTimeout(() => {
    list.scrollLeft -= itemWidth + padding;
  }, 1000); // Delay scrolling by 1 second (1000 milliseconds)
});

next.addEventListener("click", () => {
  setTimeout(() => {
    list.scrollLeft += itemWidth + padding;
  }, 350); // Delay scrolling by 1 second (1000 milliseconds)
});

var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
