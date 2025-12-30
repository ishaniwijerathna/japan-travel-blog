function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * window.innerWidth}px`;
    petal.style.animationDuration = `${5 + Math.random() * 5}s`;
    petal.style.opacity = Math.random();
    petal.style.transform = `scale(${Math.random() + 0.5})`;
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 300);
