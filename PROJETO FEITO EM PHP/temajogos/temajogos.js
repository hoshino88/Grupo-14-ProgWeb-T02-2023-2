 
const sidebar = document.getElementById("sidebar");
const imgSanduiche = document.getElementById("imgSanduiche");
const overlay = document.getElementById("overlay");

imgSanduiche.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("hidden");
}

overlay.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("hidden");
}

const basePath = '../jogostema/';
const imageNames = [
  'amongus.jpg',
  'codbo2.jpg',
  'cuphead.jpg',
  'DevilMyCry.jpg',
  'doom.jpg',
  'fortnite.jpeg',
  'genshin.jpg',
  'hollowKnight.webp',
  'minecraft.jpg',
  'monsterHunter.jpg',
  'overwatch2.jpg',
  'reddead2.webp',
  'rocketLeague.jpg',
  'stardewValley.avif',
  'subnautica.webp',
  'terraria.jpg',
  'tf2.jpg',
  'thelastofus.png',
  'undertale.png',
  'valorant.jpg',
];

let currentIndex = 0;
let userChoices = [];

function loadNextImages() {
  const game1 = document.getElementById('game1');
  const game2 = document.getElementById('game2');

  // Embaralhar as imagens para garantir aleatoriedade
  const shuffledImages = shuffle(imageNames);

  game1.src = basePath + shuffledImages[0];
  game2.src = basePath + shuffledImages[1];

  // Limpar o resultado da escolha anterior
  document.getElementById('result').innerHTML = '';
}

function selectOption(choice) {
  const resultDiv = document.getElementById('result');
  userChoices.push({ pair: [imageNames[currentIndex], imageNames[currentIndex + 1]], choice });

  // Verificar se o usuário fez escolhas suficientes
  if (userChoices.length >= imageNames.length / 2) {
    // Você pode querer fazer algo quando todas as escolhas forem feitas
    alert('Game Over!');

    // Reiniciar o jogo
    currentIndex = 0;
    userChoices = [];
  } else {
    // Avançar para a próxima dupla de imagens
    currentIndex += 2;
    loadNextImages();
  }
}

// Chame a função inicialmente para exibir as primeiras imagens
loadNextImages();

// Função para embaralhar um array (algoritmo de Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
