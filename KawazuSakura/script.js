function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    sakura.innerHTML = '🌸';
    sakura.style.left = `${Math.random() * window.innerWidth}px`;
    sakura.style.animationDuration = `${Math.random() * 5 + 5}s`;
    sakura.style.fontSize = `${Math.random() * 10 + 14}px`;
    document.body.appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    }, 10000);
}

setInterval(createSakura, 300);
