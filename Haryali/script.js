document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('main input');

    // Glow animation on focus
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 12px 4px rgba(76, 175, 80, 0.7)';
    });

    input.addEventListener('blur', () => {
        input.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    });

    // Placeholder click animation
    input.addEventListener('click', () => {
        input.placeholder = "Type your query...";
        setTimeout(() => {
            input.placeholder = "search for nursery,plants or a pots";
        }, 2000);
    });
});
