document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FF00FF';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#00FF00';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('matrix-typewriter');
    const text = "Follow the white rabbit...";
    const typingSpeed = 100; // Adjust speed here (milliseconds)

    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
