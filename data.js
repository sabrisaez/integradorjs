const productsData = [
  {
    id: 1,
    name: "Sailor Moon: Another Story",
    price: 20000,
    year: 1995,
    category: "snes",
    consoleImg: "./assets/img/snes-logo.jpg",
    cardImg: "./assets/img/Bishoujo-Senshi-Sailor-Moon-Another-Story-SNES.jpg",
  },
  {
    id: 2,
    name: "Donkey Kong Country",
    price: 25000,
    year: 1994,
    category: "snes",
    consoleImg: "./assets/img/snes-logo.jpg",
    cardImg: "./assets/img/Donkey-Kong-Country.jpg",
  },
  {
    id: 3,
    name: "Donkey Kong Country 2",
    price: 23000,
    year: 1995,
    category: "snes",
    consoleImg: "./assets/img/snes-logo.jpg",
    cardImg: "./assets/img/Donkey-Kong-Country-2.jpg",
  },
  {
    id: 4,
    name: "Donkey Kong Country 3",
    price: 25000,
    year: 1996,
    category: "snes",
    consoleImg: "./assets/img/snes-logo.jpg",
    cardImg: "./assets/img/Donkey-Kong-Country 3.jpg",
  },
  {
    id: 5,
    name: "Mortal Kombat-2",
    price: 22000,
    year: 1993,
    category: "snes",
    consoleImg: "./assets/img/snes-logo.jpg",
    cardImg: "./assets/img/Mortal-Kombat-2.jpg",
  },
  {
    id: 6,
    name: "Super Mario World 2 Yoshi's Island",
    price: 25000,
    year: 1995,
    category: "snes",
    consoleImg: "./assets/img/snes-logo.jpg",
    cardImg: "./assets/img/Super-Mario-World-2.jpg",
  },
  {
    id: 7,
    name: "The Legend of Zelda: A Link to the Past",
    price: 24000,
    year: 1991,
    category: "snes",
    consoleImg: "./assets/img/snes-logo.jpg",
    cardImg: "./assets/img/The-Legend-of-Zelda.jpg",
  },
  {
    id: 8,
    name: "Pokémon Esmeralda",
    price: 18000,
    year: 2004,
    category: "gba",
    consoleImg: "./assets/img/gba-logo.jpg",
    cardImg: "./assets/img/Pokemon-esmeralda.jpg",
  },
  {
    id: 9,
    name: "Pokémon Rubí",
    price: 18000,
    year: 2002,
    category: "gba",
    consoleImg: "./assets/img/gba-logo.jpg",
    cardImg: "./assets/img/Pokemon-ruby.jpg",
  },
  {
    id: 10,
    name: "Pokémon Zafiro",
    price: 18000,
    year: 2002,
    category: "gba",
    consoleImg: "./assets/img/gba-logo.jpg",
    cardImg: "./assets/img/Pokemon-zafiro.jpg",
  },
  {
    id: 11,
    name: "Kirby Nightmare in Dream Land",
    price: 15000,
    year: 2002,
    category: "gba",
    consoleImg: "./assets/img/gba-logo.jpg",
    cardImg: "./assets/img/Kirby.jpg",
  },
  {
    id: 12,
    name: "Wario Land 4",
    price: 17000,
    year: 2001,
    category: "gba",
    consoleImg: "./assets/img/gba-logo.jpg",
    cardImg: "./assets/img/Wario-Land-4.png",
  },
  {
    id: 13,
    name: "Sonic Advance 3",
    price: 16000,
    year: 2004,
    category: "gba",
    consoleImg: "./assets/img/gba-logo.jpg",
    cardImg: "./assets/img/sonic-advance-3.jpg",
  },
  {
    id: 14,
    name: "Sonic Adventure",
    price: 20000,
    year: 1998,
    category: "dreamcast",
    consoleImg: "./assets/img/dreamcast-logo.jpg",
    cardImg: "./assets/img/Sonic_Adventure.png",
  },
  {
    id: 15,
    name: "Sonic Adventure 2",
    price: 22000,
    year: 2001,
    category: "dreamcast",
    consoleImg: "./assets/img/dreamcast-logo.jpg",
    cardImg: "./assets/img/sonic-adventure-2.jpg",
  },
  {
    id: 16,
    name: "Resident Evil: Code: Veronica",
    price: 20000,
    year: 2000,
    category: "dreamcast",
    consoleImg: "./assets/img/dreamcast-logo.jpg",
    cardImg: "./assets/img/resident-evil-code-veronica.jpg",
  },
  {
    id: 17,
    name: "Crazy Taxi 2",
    price: 22000,
    year: 2001,
    category: "dreamcast",
    consoleImg: "./assets/img/dreamcast-logo.jpg",
    cardImg: "./assets/img/crazy-taxi-2.jpg",
  },
  {
    id: 18,
    name: "Rayman 2: The Great Escape",
    price: 20000,
    year: 1999,
    category: "dreamcast",
    consoleImg: "./assets/img/dreamcast-logo.jpg",
    cardImg: "./assets/img/rayman-2.jpg",
  },
  {
    id: 19,
    name: "The House of the Dead 2",
    price: 18000,
    year: 1998,
    category: "dreamcast",
    consoleImg: "./assets/img/dreamcast-logo.jpg",
    cardImg: "./assets/img/the-house-of-the-dead-2.jpg",
  },
  {
    id: 20,
    name: "Crash Team Racing",
    price: 18000,
    year: 1999,
    category: "playstation",
    consoleImg: "./assets/img/playstation_logo.jpg",
    cardImg: "./assets/img/CRASH-TEAM-RACING.jpg",
  },
  {
    id: 21,
    name: "Digimon World",
    price: 18000,
    year: 1999,
    category: "playstation",
    consoleImg: "./assets/img/playstation_logo.jpg",
    cardImg: "./assets/img/Digimon-world.jpg",
  },
  {
    id: 22,
    name: "Gran Turismo 2",
    price: 18000,
    year: 1999,
    category: "playstation",
    consoleImg: "./assets/img/playstation_logo.jpg",
    cardImg: "./assets/img/GranTurismo2.jpg",
  },
  {
    id: 23,
    name: "Tekken 3",
    price: 18000,
    year: 1997,
    category: "playstation",
    consoleImg: "./assets/img/playstation_logo.jpg",
    cardImg: "./assets/img/tekken_3.jpg",
  },
  {
    id: 24,
    name: "Metal Gear Solid",
    price: 18000,
    year: 1998,
    category: "playstation",
    consoleImg: "./assets/img/playstation_logo.jpg",
    cardImg: "./assets/img/metalgearsolid.jpg",
  },
  {
    id: 25,
    name: "Pepsiman",
    price: 15000,
    year: 1999,
    category: "playstation",
    consoleImg: "./assets/img/playstation_logo.jpg",
    cardImg: "./assets/img/pepsiman.jpg",
  },
];

const divideProductsInParts = (size) => {
  // retornar la lista de productos
  let productsList = [];
  // 0 - 6 - 12
  for (let i = 0; i < productsData.length; i += size) {
    // [ [{},{},{},{},{},{}] , [{},{},{},{},{},{}], [{},{},{}]]
    productsList.push(productsData.slice(i, i + size));
  }
  return productsList;
};

// const [products, setState] = useState
// const [currentProductsIndex, setState] = useState
// const [productsLimit, setState] = useState
// const [activeFilter, setState] = useState

const appState = {
  //  0                     1              2
  products: divideProductsInParts(3), // [ [{},{},{},{},{}] , [{},{},{},{},{}], [{},{},{},{},{}]] 3
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(3).length, // 3
  activeFilter: null,
};

init();
