const text = "IQBALRONI";
const el = document.getElementById("cyber");
const loader = document.getElementById("loader");
const tulisan = document.getElementById("tulisan");
const content = document.getElementById("main-content");

el.innerHTML = text
  .split("")
  .map(c => `<span>${c}</span>`)
  .join("");

gsap.set("#cyber span", {
  opacity: 0,
  y: 20
});
gsap.set(loader, {
  transformOrigin: "center center"
});

const ts = gsap.timeline({
  onComplete: () => {
    content.style.display = "block";
  }
});

ts.to("#cyber span", {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out"
  })

  .to("#cyber span", {
    color: "transparent",
    webkitTextStroke: "1.5px #0ae448", // Ganti warna outline di sini
    duration: 0.4,
    stagger: 0.05, // Efek outline berjalan berurutan agar lebih estetik
    ease: "power1.inOut"
  })

  // jeda sedikit biar dramatis
  .to({}, {
    duration: 0.5
  })

  .to("#copy",{
    y: 50,
  })

  // SCALE KE DEPAN LAYAR + BLUR
  .to(tulisan, {
    scale: 4,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1.2,
    ease: "power3.in",
    onComplete: () => {
      loader.style.display = "none";
    }
  });
  