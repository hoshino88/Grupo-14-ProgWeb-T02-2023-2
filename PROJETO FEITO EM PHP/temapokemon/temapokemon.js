 
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


const basePath = '../poketema/';
const imageNames = [
          '001-pokemon-bulbasaur.png',
          '002-pokemon-ivysaur.png',
          '003-pokemon-venusaur.png',
          '004-pokemon-charmander.png',
          '005-pokemon-charmeleon.png',
          '006-pokemon-charizard.png',
          '007-pokemon-squirtle.png',
          '008-pokemon-wartortle.png',
          '009-pokemon-blastoise.png',
          '010-pokemon-caterpie.png',
          '011-pokemon-metapod.png',
          '012-pokemon-butterfree.png',
          '013-pokemon-weedle.png',
          '014-pokemon-kakuna.png',
          '015-pokemon-beedrill.png',
          '016-pokemon-pidgey.png',
          '017-pokemon-pidgeotto.png',
          '018-pokemon-pidgeot.png',
          '019-pokemon-rattata.png',
          '020-pokemon-raticate.png',
          '021-pokemon-spearow.png',
          '022-pokemon-fearow.png',
          '023-pokemon-ekans.png',
          '024-pokemon-arbok.png',
          '025-pokemon-pikachu.png',
          '026-pokemon-raichu.png',
          '027-pokemon-sandshrew.png',
          '028-pokemon-sandslash.png',
          '029-pokemon-nidoran.png',
          '030-pokemon-nidorina.png',
          '031-pokemon-nidoqueen.png',
          '033-pokemon-nidorino.png',
          '034-pokemon-nidoking.png',
          '035-pokemon-clefairy.png',
          '036-pokemon-clefable.png',
          '037-pokemon-vulpix.png',
          '038-pokemon-ninetales.png',
          '039-pokemon-jigglypuff.png',
          '040-pokemon-wigglytuff.png',
          '041-pokemon-zubat.png',
          '042-pokemon-golbat.png',
          '043-pokemon-oddish.png',
          '044-pokemon-gloom.png',
          '045-pokemon-vileplume.png',
          '046-pokemon-paras.png',
          '047-pokemon-parasect.png',
          '048-pokemon-venonat.png',
          '049-pokemon-venomoth.png',
          '050-pokemon-diglett.png',
          '051-pokemon-dugtrio.png',
          '052-pokemon-meowth.png',
          '053-pokemon-persian.png',
          '054-pokemon-psyduck.png',
          '055-pokemon-golduck.png',
          '056-pokemon-mankey.png',
          '057-pokemon-primeape.png',
          '058-pokemon-growlithe.png',
          '059-pokemon-arcanine.png',
          '060-pokemon-poliwag.png',
          '061-pokemon-poliwhirl.png',
          '062-pokemon-poliwrath.png',
          '063-pokemon-abra.png',
          '064-pokemon-kadabra.png',
          '065-pokemon-alakazam.png',
          '066-pokemon-machop.png',
          '067-pokemon-machoke.png',
          '068-pokemon-machamp.png',
          '069-pokemon-bellsprout.png',
          '070-pokemon-weepinbell.png',
          '071-pokemon-victreebel.png',
          '072-pokemon-tentacool.png',
          '073-pokemon-tentacruel.png',
          '074-pokemon-geodude.png',
          '075-pokemon-graveler.png',
          '076-pokemon-golem.png',
          '077-pokemon-ponyta.png',
          '078-pokemon-rapidash.png',
          '079-pokemon-slowpoke.png',
          '080-pokemon-slowbro.png',
          '081-pokemon-magnemite.png',
          '082-pokemon-magneton.png',
          '083-pokemon-farfetchd.png',
          '084-pokemon-doduo.png',
          '085-pokemon-dodrio.png',
          '086-pokemon-seel.png',
          '087-pokemon-dewgong.png',
          '088-pokemon-grimer.png',
          '089-pokemon-muk.png',
          '090-pokemon-shellder.png',
          '091-pokemon-cloyster.png',
          '092-pokemon-gastly.png',
          '093-pokemon-haunter.png',
          '094-pokemon-gengar.png',
          '095-pokemon-onix.png',
          '096-pokemon-drowzee.png',
          '097-pokemon-hypno.png',
          '098-pokemon-krabby.png',
          '099-pokemon-kingler.png',
          '100-pokemon-voltorb.png',
          '101-pokemon-electrode.png',
          '102-pokemon-exeggcute.png',
          '103-pokemon-exeggutor.png',
          '104-pokemon-cubone.png',
          '105-pokemon-marowak.png',
          '106-pokemon-hitmonlee.png',
          '107-pokemon-hitmonchan.png',
          '108-pokemon-lickitung.png',
          '109-pokemon-koffing.png',
          '110-pokemon-weezing.png',
          '111-pokemon-rhyhorn.png',
          '112-pokemon-rhydon.png',
          '113-pokemon-chansey.png',
          '114-pokemon-tangela.png',
          '115-pokemon-kangaskhan.png',
          '116-pokemon-horsea.png',
          '117-pokemon-seadra.png',
          '118-pokemon-goldeen.png',
          '119-pokemon-seaking.png',
          '120-pokemon-staryu.png',
          '121-pokemon-starmie.png',
          '122-pokemon-mr-mime.png',
          '123-pokemon-scyther.png',
          '124-pokemon-jynx.png',
          '125-pokemon-electabuzz.png',
          '126-pokemon-magmar.png',
          '127-pokemon-pinsir.png',
          '128-pokemon-tauros.png',
          '129-pokemon-magikarp.png',
          '130-pokemon-gyarados.png',
          '131-pokemon-lapras.png',
          '132-pokemon-ditto.png',
          '133-pokemon-eevee.png',
          '134-pokemon-vaporeon.png',
          '135-pokemon-jolteon.png',
          '136-pokemon-flareon.png',
          '137-pokemon-porygon.png',
          '138-pokemon-omanyte.png',
          '139-pokemon-omastar.png',
          '140-pokemon-kabuto.png',
          '141-pokemon-kabutops.png',
          '142-pokemon-aerodactyl.png',
          '143-pokemon-snorlax.png',
          '144-pokemon-articuno.png',
          '145-pokemon-zapdos.png',
          '146-pokemon-moltres.png',
          '147-pokemon-dratini.png',
          '148-pokemon-dragonair.png',
          '149-pokemon-dragonite.png',
          '150-pokemon-mewtwo.png',
          '151-pokemon-mew.png',
        ];

        let currentIndex = 0;
        let userChoices = [];

        function loadNextImages() {
          const pokemon1 = document.getElementById('pokemon1');
          const pokemon2 = document.getElementById('pokemon2');

          // Embaralhar as imagens para garantir aleatoriedade
          const shuffledImages = shuffle(imageNames);

          const name1 = document.getElementById('name1');
          const name2 = document.getElementById('name2');

          document.getElementById('image1').src = basePath + shuffledImages[0];
          name1.innerText = getPokemonName(shuffledImages[0]);

          document.getElementById('image2').src = basePath + shuffledImages[1];
          name2.innerText = getPokemonName(shuffledImages[1]);

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

        // Função para obter o nome do Pokémon a partir do nome do arquivo
        function getPokemonName(fileName) {
          const parts = fileName.split('-pokemon-')[1].split('.png');
          return parts[0];
        }