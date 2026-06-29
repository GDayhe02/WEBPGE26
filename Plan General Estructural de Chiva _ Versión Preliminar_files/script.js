document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');

    function updateCursorPosition(event) {
        const cursorSize = cursor.offsetWidth;
        cursor.style.left = `${event.clientX - cursorSize / 2}px`;
        cursor.style.top = `${event.clientY - cursorSize / 2}px`;
    }

    function createRipple(event) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${event.clientX - event.target.getBoundingClientRect().left}px`;
        ripple.style.top = `${event.clientY - event.target.getBoundingClientRect().top}px`;
        event.currentTarget.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    }

    document.body.addEventListener('mousemove', updateCursorPosition);

    const interactiveElements = Array.from(document.querySelectorAll('a, button'));

    interactiveElements.forEach((element) => {
        element.style.cursor = 'none';
        element.addEventListener('mouseenter', () => cursor.classList.add('cursor-active'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('cursor-active'));
        element.addEventListener('click', createRipple);
    });

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('mouseenter', () => card.classList.add('hovered'));
        card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
    });

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = `© ${new Date().getFullYear()}`;
    }
});
