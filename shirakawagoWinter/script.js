function createSnow() {
    const snow = document.createElement('div');
    snow.classList.add('snowflake');
    snow.style.left = `${Math.random() * window.innerWidth}px`;
    snow.style.animationDuration = `${5 + Math.random() * 7}s`;
    snow.style.opacity = Math.random();
    snow.style.transform = `scale(${Math.random() + 0.5})`;
    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 12000);
}

setInterval(createSnow, 200);
