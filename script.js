console.log("Hello world");

const banner = document.getElementById("banner");

addEventListener("scroll", () => {
  const dramatic_scroll = 15 * Math.sqrt(scrollY);
  banner.style.top = `-${dramatic_scroll}px`;
});
