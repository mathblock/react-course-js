const menuData = [
  {
    id: 1,
    name: 'Salade César',
    description: 'Laitue romaine fraîche avec croûtons croustillants, parmesan râpé et une sauce César maison crémeuse.',
    price: 8.50,
    image: '/src/images/Salade César.webp',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 2,
    name: 'Frites Maison',
    description: 'Frites dorées et croustillantes, servies avec une sauce ketchup maison.',
    price: 4.00,
    image: '/src/images/Fries.webp',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 3,
    name: 'Hot Dog Classique',
    description: 'Saucisse grillée dans un pain moelleux, garni de ketchup et moutarde pour un goût authentique.',
    price: 5.00,
    image: '/src/images/hot dog.jpg',
    isVegetarian: false,
    isNew: false
  },
  {
    id: 4,
    name: 'Tacos au Poulet',
    description: 'Tacos moelleux farcis de poulet effiloché épicé, crème fraîche, herbes fraîches et sauces piquantes.',
    price: 7.00,
    image: '/src/images/Chicken tacos.png',
    isVegetarian: false,
    isNew: true
  },
  {
    id: 5,
    name: 'Smoothie Fraise',
    description: 'Smoothie rafraîchissant aux fraises fraîches, mixé à la perfection avec une touche de menthe.',
    price: 4.50,
    image: '/src/images/stawberry.jpg',
    isVegetarian: true,
    isNew: true
  },
  {
    id: 6,
    name: 'Tiramisu',
    description: 'Dessert italien classique avec couches de mascarpone, biscuits imbibés de café et saupoudré de cacao.',
    price: 6.00,
    image: '/src/images/tiramisu.jpg',
    isVegetarian: true,
    isNew: false
  },

  {
    id: 7,
    name: 'Burger Gourmet',
    description: 'Burger juteux avec oignons caramélisés, fromage fondu et sauce aïoli maison.',
    price: 9.50,
    image: 'https://media.istockphoto.com/id/928803394/photo/appetizing-cheeseburger-on-wooden-table.jpg?s=612x612&w=0&k=20&c=LiDC8NLWwIz95fy2bq4ljNFLXUpFfuZMnqQkgqfTdRg=',
    isVegetarian: false,
    isNew: true
  },
  {
    id: 8,
    name: 'Falafel Wrap',
    description: 'Wrap de falafels croustillants avec sauce tahini, légumes frais et herbes.',
    price: 7.00,
    image: 'https://c8.alamy.com/comp/2R06WYP/portion-of-vegetarian-falafel-wrap-roll-on-board-2R06WYP.jpg',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 9,
    name: 'Crêpe au Nutella',
    description: 'Crêpe fine garnie de Nutella, bananes et amandes grillées.',
    price: 5.50,
    image: 'https://media.istockphoto.com/id/1210773494/photo/chocolate-pancake-with-bananas.jpg?s=612x612&w=0&k=20&c=dIj_EfOxKKOnWYU4GdfvKGgePRiKB__YZPHHfsRfPb4=',
    isVegetarian: true,
    isNew: true
  },
  {
    id: 10,
    name: 'Limonade Maison',
    description: 'Limonade fraîche préparée avec citrons bio et une touche de menthe.',
    price: 3.00,
    image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/fresh-homemade-lemonade-free-photo.jpg?w=2210&quality=70',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 11,
    name: 'Panini Jambon Fromage',
    description: 'Panini grillé avec jambon, fromage emmental et tomates.',
    price: 6.50,
    image: 'https://media.istockphoto.com/id/155388694/photo/panini-sandwiches.jpg?s=612x612&w=0&k=20&c=Mhw9G5bvg0_llzocq7DHTMjo40MnYdq9YNMEzWwlEWg=',
    isVegetarian: false,
    isNew: false
  },
  {
    id: 12,
    name: 'Tranche de Pizza Margherita',
    description: 'Tranche de pizza avec sauce tomate, mozzarella et basilic frais.',
    price: 4.50,
    image: 'https://img.freepik.com/premium-psd/close-up-delicious-margherita-pizza-slice-with-fresh-basil_208141-556.jpg?semt=ais_incoming&w=740&q=80',
    isVegetarian: true,
    isNew: true
  },
  {
    id: 13,
    name: 'Ailes de Poulet Épicées',
    description: 'Ailes croustillantes enrobées de sauce épicée, servies avec une trempette ranch.',
    price: 8.00,
    image: 'https://thumbs.dreamstime.com/b/serving-spicy-chicken-wings-dipping-sauce-plate-appetizing-served-garnished-parsley-savory-experience-381526539.jpg',
    isVegetarian: false,
    isNew: false
  },
  {
    id: 14,
    name: 'Burger Vegan',
    description: 'Burger à base de plantes avec laitue, tomate et mayo vegan.',
    price: 9.00,
    image: 'https://thumbs.dreamstime.com/b/close-up-appetizing-shot-gourmet-vegetarian-vegan-burger-featuring-vibrant-deep-red-patty-likely-made-beetroot-beans-416732484.jpg',
    isVegetarian: true,
    isNew: true
  },
  {
    id: 15,
    name: 'Cornet de Glace Vanille',
    description: 'Glace vanille crémeuse dans un cornet gaufrette avec garnitures.',
    price: 3.50,
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2024/05/Fast-Food-Vanilla-Main.jpg?quality=82&strip=all',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 16,
    name: 'Café Chaud',
    description: 'Café fraîchement infusé et fumant.',
    price: 2.50,
    image: 'https://www.shutterstock.com/image-photo/closeup-hot-coffee-green-cup-260nw-2646830635.jpg',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 17,
    name: "Beignets mais et haricot camerounais",
    description: "farine de maïs, haricot camerounais, oignon, épices",
    price: 12.45,
    category: "plats",
    image: "https://i.pinimg.com/1200x/35/90/e8/3590e8ecfb56b6a40a76f87555df3272.jpg",
    isVegetarian: false,
    isNew: true
  },{
    id: 18,
    name: "koki",
    description: "grains de koki, huile de palme, sel gemme,sel,piment",
    price: 16.20,
    category: "plats",
    image: "https://www.pinterest.com/pin/56787645304470768/",
    isVegetarian: false,
    isNew: false
  },
    {
    id: 19,
    name: "Ndole ",
    description: "feuilles de ndole, viande fumée, crevettes, arachides",
    price: 11.20,
    category: "plats",
    image: "https://www.pinterest.com/pin/1759287347543634/",
    isVegetarian: false,
    isNew: false
    },
    {
    id: 20,
    name: "folere ",
    description: "feuilles de folere, ananas, menthe, aromes, sucre",
    price: 9.20,
    category: "boissons",
    image: "https://www.pinterest.com/pin/877639046104494512/",
    isVegetarian: true,
    isNew: false
    },
    {
    id: 21,
    name: "jus de gingembre ",
    description: "gingembre, citron, sucre, eau",
    price: 8.50,
    category: "boissons",
    image: "https://www.pinterest.com/pin/144678206775735602/",
    isVegetarian: true,
    isNew: true
    },
    {
    id: 22,
    name: "gateau chocolat",
    description: "chocolat, beurre, sucre, farine",
    price: 10.50,
    category: "desserts",
    image: "https://www.pinterest.com/pin/332422016307965791/",
    isVegetarian: false,
    isNew: true
    },
    {
    id: 23,
    name: "salade de fruits exotiques",
    description: "mangue, ananas, papaye, citron vert, menthe",
    price: 9.75,
    category: "desserts",
    image: "https://www.pinterest.com/pin/305654622202051/",
    isVegetarian: true,
    isNew: false
    },
    {
    id: 24,
    name: "tarte à la noix de coco",
    description: "noix de coco, lait de coco, sucre, pâte sablée",
    price: 11.00,
    category: "desserts",
    image: "https://www.pinterest.com/pin/823671051654303/",
    isVegetarian: true,
    isNew: false
    },
    {
    id: 25,
    name: "poulet DG",
    description: "poulet, plantains, légumes, épices",
    price: 14.30,
    category: "plats",
    image: "https://www.pinterest.com/pin/305654622202051/",
    isVegetarian: false,
    isNew: true
    },
    {
    id: 26,
    name: "riz cantonais à la camerounaise",
    description: "riz, légumes, œufs, crevettes, sauce soja",
    price: 13.50,
    category: "plats",
    image: "https://www.pinterest.com/pin/540424330789670/",
    isVegetarian: false,
    isNew: false
    },
    {
    id: 27,
    name: "pudding de manioc",
    description: "manioc, lait de coco, sucre, épices",
    price: 10.00,
    category: "desserts",
    image: "https://www.pinterest.com/pin/823671051654303/",
    isVegetarian: true,
    isNew: true
    },
    {
    id: 28,
    name: "smoothie mangue et banane",
    description: "mangue, banane, yaourt, miel",
    price: 9.00,
    category: "boissons",
    image: "https://www.pinterest.com/pin/144678206775735602/",
    isVegetarian: true,
    isNew: false
    }
];

export default menuData;
