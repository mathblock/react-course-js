const menuData = [
  {
    id: "1",
    name: "Brochettes de viande",
    description: "Viande marinée, oignons, tomates, épices",
    price: 8.5,
    category: "entrees",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop",
    isVegetarian: false,
    isNew: true
  },
  {
    id: "2",
    name: "Salade niçoise",
    description: "Laitue, tomate, œuf, tuna, olive, anchois",
    price: 9.0,
    category: "entrees",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
    isVegetarian: true,
    isNew: false
  },
  {
    id: "3",
    name: "Accras de morue",
    description: "Morue frite, farine, oignons, piment",
    price: 7.8,
    category: "entrees",
    image: "https://unpointculture.com/wp-content/uploads/2023/07/accras-morue.jpeg",
    isVegetarian: false,
    isNew: false
  },
  {
    id: "4",
    name: "Salade de poulpe",
    description: "Poulpe, oignons, citron, huile, persil",
    price: 10.5,
    category: "entrees",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
    isVegetarian: true,
    isNew: true
  },
  {
    id: "5",
    name: "Crevettes grillées",
    description: "Crevettes marinées, grillées, sauce ail et persil",
    price: 12.5,
    category: "entrees",
    image: "https://bing.com/th?id=OSK.27b05f9bb1ed1bdf316735a602ab143a",
    isVegetarian: false,
    isNew: false
  },
  {
    id: "6",  
    name: "Poulet DG",
    description: "Poulet rôti, plantains, légumes, épices",
    price: 14.3,
    category: "plats",
    image: "https://larondedesfemmes.com/images/2021/01/22/Poulet_DG_Site_RDF_large_large.jpg",
    isVegetarian: false,
    isNew: true
  },
  {
    id: "7",
    name: "Riz cantonais à la camerounaise",
    description: "Riz, légumes, œufs, crevettes, sauce soja",
    price: 13.5,
    category: "plats",
    image: "https://i1.wp.com/www.uneplumedanslacuisine.com/wp-content/uploads/2013/09/riz-cantonais-11.jpg",
    isVegetarian: false,
    isNew: false
  },
  {
    id: "8",
    name: "Ndolé",
    description: "Feuilles de ndolé, viande fumée, crevettes, arachides",
    price: 11.2,
    category: "plats",
    image: "https://discover-cameroon.com/wp-content/uploads/2019/04/Ndole.jpg",
    isVegetarian: true,
    isNew: false
  },
  {
    id: "9",
    name: "Koki",
    description: "Grains de koki, huile de palme, sel, piment",
    price: 16.2,
    category: "plats",
    image: "https://i.ytimg.com/vi/f1MC0lYP8OU/maxresdefault.jpg",
    isVegetarian: false,
    isNew: false
  },
  {
    id: "10",
    name: "Jus de gingembre",
    description: "Gingembre, citron, sucre, eau",
    price: 8.5,
    category: "boissons",
    image: "https://img.cuisineaz.com/660x660/2018/11/17/i144267-jus-de-gingembre.jpeg",
    isVegetarian: true,
    isNew: true
  },
  {
    id: "11",
    name: "Smoothie mangue et banane",
    description: "Mangue, banane, yaourt, miel",
    price: 9.0,
    category: "boissons",
    image: "https://www.cocktails-road.fr/images/recipe/2021/03/smoothie-mangue-banane-au-thermomix.jpg",
    isVegetarian: true,
    isNew: false
  },
  {
    id: "12",
    name: "Foléré",
    description: "Feuilles de foléré, ananas, menthe",
    price: 9.2,
    category: "boissons",
    image: "https://i.ytimg.com/vi/HZ6tCRRW7EI/maxresdefault.jpg",
    isVegetarian: true,
    isNew: false
  },
  {
    id: "13",
    name: "Gâteau chocolat",
    description: "Chocolat, beurre, sucre, farine",
    price: 10.5,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop",
    isVegetarian: false,
    isNew: true
  },
  {
    id: "14",
    name: "Salade de fruits exotiques",
    description: "Mangue, ananas, papaye, citron vert",
    price: 9.75,
    category: "desserts",
    image: "https://quoiquonmange.files.wordpress.com/2018/11/salade-de-fruits-exotiques-2.jpg",
    isVegetarian: true,
    isNew: false
  },
  {
    id: "15",
    name: "Tarte à la noix de coco",
    description: "Noix de coco, lait de coco, sucre",
    price: 11.0,
    category: "desserts",
    image: "https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/20191957/tarte-magique-a-la-noix-de-coco.jpeg",
    isVegetarian: false,
    isNew: false
  },
  {
    id: "16",
    name: "Beignets de banane plantain",
    description: "Banane plantain, farine, sucre, huile",
    price: 7.5,
    category: "desserts",
    image: "https://www.opnminded.com/wp-content/uploads/2021/08/beignets-de-banane-plantain-6.jpg",
    isVegetarian: false,
    isNew: true
  },
  {
    id: "17",
    name: "Crêpes à la farine de manioc",
    description: "Farine de manioc, œufs, lait, sucre",
    price: 8.0,
    category: "desserts",
    image: "https://ma-cuisine-antidouleur.fr/wp-content/uploads/2021/02/crepe-a-la-farine-de-manioc.jpg",
    isVegetarian: false,
    isNew: false
  }
];

export default menuData;