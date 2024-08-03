
// JavaScript to handle rain animation
document.addEventListener("DOMContentLoaded", function() {
    createRain();
});

function createRain() {
    let rainContainer = document.getElementById('container');
    for (let i = 0; i < 100; i++) {
        let drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDelay = Math.random() * 2 + 's';
        drop.style.animationDuration = 0.5 + Math.random() * 1.5 + 's';
        rainContainer.appendChild(drop);
    }
}
