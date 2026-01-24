let lastScroll = 0;
const navbar = document.getElementById("navbar");

gsap.set(navbar, {
  y: 0,
  opacity: 1
});

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    navbar.classList.remove("blur");
    navbar.classList.add("padding");
    return
  }

  if (currentScroll > lastScroll && currentScroll > 80) {
    // scroll ke bawah → hide
    navbar.classList.remove("padding");
    gsap.to(navbar, {
      y: -80,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  } else {
    // scroll ke atas → show
    navbar.classList.remove("padding");
    gsap.to(navbar, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    });
    navbar.classList.add("blur");
  }

  lastScroll = currentScroll;
});