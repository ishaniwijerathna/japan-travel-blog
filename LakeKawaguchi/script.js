const TOTAL_LEAVES = 20;
const LEAF_EMOJIS = ['🍁','🍂','🍂','🍁'];

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.innerText = LEAF_EMOJIS[Math.floor(Math.random() * LEAF_EMOJIS.length)];
  leaf.style.left = `${Math.random() * 100}vw`;
  const duration = 6 + Math.random() * 6;
  leaf.style.animationDuration = `${duration}s`;
  leaf.style.fontSize = `${16 + Math.random() * 20}px`;
  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, duration * 1000);
}

for (let i = 0; i < TOTAL_LEAVES; i += 1) {
  setTimeout(createLeaf, i * 400);
}

setInterval(createLeaf, 900);
