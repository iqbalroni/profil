gsap.registerPlugin(ScrollTrigger);

gsap.to(".image-me", {
  x: -500,
  opacity: 0,
  scrollTrigger: {
    scrub: 2,
  }
});
gsap.to("#deskripsi", {
  x: 500,
  opacity: 0,
  scrollTrigger: {
    end: "+=3000",
    scrub: 2,
  }
});
gsap.to("#firstName", {
  x: 500,
  opacity: 0,
  scrollTrigger: {
    scrub: 2,
  }
});
gsap.to("#secondName", {
  x: -300,
  opacity: 0,
  scrollTrigger: {
    scrub: 2,
  }
});
gsap.to("#box", {
  x: -400,
  opacity: 0,
  scrollTrigger: {
    scrub: 1,
  }
});
gsap.from("#tagline-about", {
  x: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about-section",
    scrub: true,
    start: "top 100%",
    end: "top 30%",
  }
});
gsap.from("#title-konsisten", {
  x: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about-section",
    scrub: 2,
    start: "top 80%",
    end: "top 50%",
  }
});
gsap.from("#about-desk", {
  y: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about-section",
    scrub: 2,
    start: "top 50%",
    end: "top 50%",
  }
});
gsap.from("#keahlian-button", {
  x: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about-section",
    scrub: 2,
    start: "top 50%",
    end: "top 50%",
  }
});

// porfolio
const cards = gsap.utils.toArray(".card-porto");

// Buat Timeline yang akan dikontrol oleh scroll
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top top", // Mulai pin saat section menyentuh atas layar
    end: "+=1500", // Jarak scroll (semakin besar, semakin lambat perpindahannya)
    pin: true, // Tahan layar di sini
    scrub: 1, // Animasi halus mengikuti scroll
    // markers: false // Nyalakan (true) jika ingin melihat batas start/end
  }
});

// Animasi: Untuk setiap kartu, pindahkan dari 'left: 150%' ke posisi tumpukannya
cards.forEach((card, index) => {
  const isMobile = window.innerWidth <= 768;
  tl.to(card, {
    // Posisi berhenti (misal kartu 1 di 10%, kartu 2 di 15%, dst agar ada efek tumpukan)
    left: isMobile ? "0%" : (10 + (index * 2)) + "%",
    top: isMobile ? (38 + (index * 2)) + "%" : (50 + (index * 2)) + "%",
    duration: 1,
    ease: "power2.out"
  }, index * 2); // 'index * 2' memberikan jeda waktu masuk antar kartu

  // Efek tambahan: kartu sebelumnya agak redup saat kartu baru masuk
  if (index > 0) {
    tl.to(cards[index - 1], {
      // scale: 0.95,
      filter: "brightness(0.8)",
      // duration: 1
    }, index * 2);
  }
});
tl.to({}, {
  duration: 2
});
gsap.from("#tag-youtube", {
  x: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#youtube-section",
    scrub: true,
    start: "top 100%",
    end: "top 30%",
  }
});
gsap.from("#titles-youtube", {
  x: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#youtube-section",
    scrub: 1,
    start: "top 100%",
    end: "top 30%",
  }
});
gsap.from("#deskripsi-youtube", {
  x: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#youtube-section",
    scrub: 1,
    start: "top 100%",
    end: "top 30%",
  }
});

// skil

const boxSkill = gsap.utils.toArray(".skill-card");

// Buat Timeline yang akan dikontrol oleh scroll
let skill = gsap.timeline({
  scrollTrigger: {
    trigger: "#skillMe",
    start: "top top", // Mulai pin saat section menyentuh atas layar
    end: "+=1000", // Jarak scroll (semakin besar, semakin lambat perpindahannya)
    pin: true, // Tahan layar di sini
    scrub: 1, // Animasi halus mengikuti scroll
    // markers: false // Nyalakan (true) jika ingin melihat batas start/end
  }
});

// Animasi: Untuk setiap kartu, pindahkan dari 'left: 150%' ke posisi tumpukannya
boxSkill.forEach((card, index) => {
  skill.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, index * 2);
  const isMobile = window.innerWidth <= 768;
  if (index >= 0) {
    skill.to(boxSkill[index - 1], {
      borderTop: isMobile ? "1px solid white" : "2px solid white",
    }, index * 2);
  }
});
skill.to({}, {
  duration: 2
});
// Ambil semua elemen box
const boxes = document.querySelectorAll('.card-youtube');

boxes.forEach((box) => {
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 90%",  // Animasi mulai saat box berada di 90% bawah layar
      end: "top 70%",    // Animasi selesai saat box naik ke 70% layar
      scrub: 1,          // KUNCI: Animasi mengikuti kecepatan scroll (halus)
    },
    opacity: 1,
    y: 0,
    scale: 1,
    ease: "none"
  });
});