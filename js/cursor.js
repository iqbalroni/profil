const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

let mouseX = 0, mouseY = 0; // Posisi mouse asli
let outlineX = 0, outlineY = 0; // Posisi lingkaran luar (trailing)

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot langsung mengikuti posisi mouse
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

// Fungsi untuk membuat efek trailing yang halus
function animate() {
    // Angka 0.15 menentukan seberapa lambat trailing-nya (semakin kecil semakin lambat)
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.left = outlineX + 'px';
    outline.style.top = outlineY + 'px';

    requestAnimationFrame(animate);
}
animate();

// Efek Hover pada elemen interaktif
const interactiveElements = document.querySelectorAll('a, button, .project-card, .video-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        outline.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        outline.style.transform = 'translate(-50%, -50%) scale(1)';
        outline.style.backgroundColor = 'transparent';
    });
});