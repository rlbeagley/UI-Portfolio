document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.2s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

window.addEventListener('scroll', () => {
    const degrees = window.scrollY * 0.2;
    document.getElementById('flower').style.transform = `rotate(${degrees}deg)`;
});