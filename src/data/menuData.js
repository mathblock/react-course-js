const menuData = [
  {
    id: 1,
    name: 'Salade César',
    description:
      'Laitue romaine fraîche avec croûtons croustillants, parmesan râpé et une sauce César maison crémeuse.',
    price: 8.5,
    category: 'entrees',
    image:
      'https://res.cloudinary.com/hellochef/image/upload/c_scale,w_1084/dpr_2.0/f_webp/q_auto/c_scale,w_380/w81zbhcpn13oevw0thzn?_a=DATAdtAAZAA0',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 2,
    name: 'Frites Maison',
    description:
      'Frites dorées et croustillantes, servies avec une sauce ketchup maison.',
    price: 4,
    category: 'entrees',
    image:
      'https://static.vecteezy.com/system/resources/previews/054/646/413/large_2x/a-close-up-of-ketchup-being-poured-onto-french-fries-photo.jpg',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 3,
    name: 'Hot Dog Classique',
    description:
      'Saucisse grillée dans un pain moelleux, garni de ketchup et moutarde pour un goût authentique.',
    price: 5,
    category: 'plats',
    image:
      'https://thumbs.dreamstime.com/b/hot-dog-falling-onto-wooden-board-ketchup-mustard-splash-vivid-hyper-realistic-shot-juicy-thick-creating-dynamic-423330701.jpg',
    isVegetarian: false,
    isNew: false
  },
  {
    id: 4,
    name: 'Tacos au Poulet',
    description:
      'Tacos moelleux farcis de poulet effiloché épicé, crème fraîche, herbes fraîches et sauces piquantes.',
    price: 7,
    category: 'plats',
    image:
      'https://static01.nyt.com/images/2025/05/14/multimedia/kf-easy-chicken-tacos-gwfh/kf-easy-chicken-tacos-gwfh-master768-v2.jpg',
    isVegetarian: false,
    isNew: true
  },
  {
    id: 5,
    name: 'Smoothie Fraise',
    description:
      'Smoothie rafraîchissant aux fraises fraîches, mixé à la perfection avec une touche de menthe.',
    price: 4.5,
    category: 'boissons',
    image:
      'https://cdn.shopify.com/s/files/1/0655/8279/2933/files/strawberry_smoothie-3_480x480.webp?v=1698326471',
    isVegetarian: true,
    isNew: true
  },
  {
    id: 6,
    name: 'Tiramisu',
    description:
      'Dessert italien classique avec couches de mascarpone, biscuits imbibés de café et saupoudré de cacao.',
    price: 6,
    category: 'desserts',
    image:
      'https://farmerswiferambles.com/wp-content/uploads/2019/09/69693198_462015211194688_6766630608736092160_n.jpg',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 7,
    name: 'Suya',
    description: 'Bœuf grillé épicé, oignons, tomates, cacahuètes.',
    price: 12,
    category: 'plats',
    image: 'https://picsum.photos/seed/suya/800/600',
    isVegetarian: false,
    isNew: true
  },
  {
    id: 8,
    name: 'Smoothie Mangue et Banane',
    description: 'Mangue, banane, yaourt, miel.',
    price: 9,
    category: 'boissons',
    image: 'https://picsum.photos/seed/mango-banana-smoothie/800/600',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 9,
    name: 'Burger Gourmet',
    description:
      'Burger juteux avec oignons caramélisés, fromage fondu et sauce aïoli maison.',
    price: 9.5,
    category: 'plats',
    image:
      'https://www.betterthanbouillon.com/wp-content/uploads/2021/06/Caramelized-Onion-Goat-Cheese-Burger-023.jpg',
    isVegetarian: false,
    isNew: true
  },
  {
    id: 10,
    name: 'Falafel Wrap',
    description:
      'Wrap de falafels croustillants avec sauce tahini, légumes frais et herbes.',
    price: 7,
    category: 'plats',
    image:
      'https://www.vibrantplate.com/wp-content/uploads/2018/12/Falafel-wraps-05.jpg',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 11,
    name: 'Crêpe au Nutella',
    description: 'Crêpe fine garnie de Nutella, bananes et amandes grillées.',
    price: 5.5,
    category: 'desserts',
    image:
      'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/banana-nutella-crepe.jpg?quality=82&strip=1',
    isVegetarian: true,
    isNew: true
  },
  {
    id: 12,
    name: 'Limonade Maison',
    description: 'Limonade fraîche préparée avec citrons bio et une touche de menthe.',
    price: 3,
    category: 'boissons',
    image: 'https://i.ytimg.com/vi/DVYFj_8kYpY/maxresdefault.jpg',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 13,
    name: 'Panini Jambon Fromage',
    description: 'Panini grillé avec jambon, fromage emmental et tomates.',
    price: 6.5,
    category: 'plats',
    image:
      'https://palatablepastime.com/wp-content/uploads/2022/04/grilled-ham-sandwich-og.jpg',
    isVegetarian: false,
    isNew: false
  },
  {
    id: 14,
    name: 'Tranche de Pizza Margherita',
    description: 'Tranche de pizza avec sauce tomate, mozzarella et basilic frais.',
    price: 4.5,
    category: 'plats',
    image: 'https://simplyhomecooked.com/wp-content/uploads/2023/04/Margherita-Pizza-4.jpg',
    isVegetarian: true,
    isNew: true
  },
  {
    id: 15,
    name: 'Ailes de Poulet Épicées',
    description:
      'Ailes croustillantes enrobées de sauce épicée, servies avec une trempette ranch.',
    price: 8,
    category: 'plats',
    image:
      'https://images.getrecipekit.com/20221020135623-shutterstock_2140941765.jpg?class=16x9',
    isVegetarian: false,
    isNew: false
  },
  {
    id: 16,
    name: 'Burger Vegan',
    description: 'Burger à base de plantes avec laitue, tomate et mayo vegan.',
    price: 9,
    category: 'plats',
    image:
      'https://preview.redd.it/vegetarian-burger-patty-lettuce-tomato-mayo-sprouted-grain-v0-3vzj1o3qmmbg1.jpeg?auto=webp&s=2b912185024efb960a2a0ce5558c7f2c2e17ca65',
    isVegetarian: true,
    isNew: true
  },
  {
    id: 17,
    name: 'Cornet de Glace Vanille',
    description: 'Glace vanille crémeuse dans un cornet gaufrette avec garnitures.',
    price: 3.5,
    category: 'desserts',
    image:
      'https://thumbs.dreamstime.com/b/vanilla-ice-cream-cone-toppings-great-creative-professional-projects-vanilla-ice-cream-cone-toppings-353838426.jpg',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 18,
    name: 'Café Chaud',
    description: 'Café fraîchement infusé et fumant.',
    price: 2.5,
    category: 'boissons',
    image:
      'https://media.istockphoto.com/id/1137365972/photo/close-up-of-steaming-cup-of-coffee-or-tea-on-vintage-table-early-morning-breakfast-on-rustic.jpg?s=612x612&w=0&k=20&c=-XbehJve0dz0daS_jVi2VLmlVMGrwPIQRdaFWChKFsM=',
    isVegetarian: true,
    isNew: false
  },
  {
    id: 19,
    name: 'Beignets Mais et Haricot Camerounais',
    description: 'Farine de maïs, haricot camerounais, oignon, épices.',
    price: 12.45,
    category: 'plats',
    image: 'https://i.pinimg.com/1200x/35/90/e8/3590e8ecfb56b6a40a76f87555df3272.jpg',
    isVegetarian: false,
    isNew: true
  }
];

export default menuData;
