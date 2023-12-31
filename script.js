// script.js

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header h1');

    header.addEventListener('click', function () {
        createLoveText();
    });

    function createLoveText() {
        const container = document.body;

        const phrase = 'I love u Bachu';

        const loveText = document.createElement('div');
        loveText.className = 'love-text';
        loveText.textContent = phrase;
        container.appendChild(loveText);

        animateLoveText(loveText);
    }

    function animateLoveText(loveText) {
        const startPosition = {
            top: header.offsetTop + header.offsetHeight + 10, // Below the heading
            left: window.innerWidth / 2 - loveText.offsetWidth / 2 // Center horizontally
        };

        loveText.style.top = `${startPosition.top}px`;
        loveText.style.left = `${startPosition.left}px`;

        const animation = loveText.animate(
            [
                { opacity: 0, transform: 'translate(0, -20px)' },
                { opacity: 1, transform: 'translate(0, 0)' }
            ],
            {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
            }
        );

        animation.onfinish = function () {
            setTimeout(() => {
                loveText.remove();
            }, 1500); // Delay removal for a brief display
        };
    }
});
