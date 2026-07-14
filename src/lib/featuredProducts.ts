export type FeaturedProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  category: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 101,
    title: "Fresh Netraa Eye Cream",
    image: "/featured/eyeCream.jpeg",
    price: 300,
    category: "Skin Care",
    description:
      "Made fresh daily in our Ayurvedic Kitchen, Fresh Netraā Cream is a blend of farm-fresh aloe vera pulp, 14 super oils & dhataki flowers for maximised enrichment. ",
  },
  {
      id: 102,
    title: "Malai Lotion",
    image: "/featured/lotion.jpeg",
    price: 250,
    category: "Skin Care",
    description:
      "Body Malai Lotion is made of fresh raw milk for full body moisturisation.",
  },

  {
    id: 103,
    title: "Fresh Navdha Shampoo",
    image: "/featured/shampoo.jpeg",
    price: 290,
    category: "Hair Care",
    description:
      "A 100% natural shampoo formulated for deep hydration, strength and frizz control with fresh aloe pulp & peanut paste.",
  },
  //   {
  //     id: 4,
  //     title: "Himalayan Lavendar Soap",
  //     image: "/featured/soap.jpeg",
  //     price: 150,
  //   },
  {
    id: 104,
    title: "Lavender Toner",
    image: "/featured/toner.jpeg",
    price: 190,
    category: "Skin Care",
    description:
      "100% pure, freshly distilled Lavender Jal made with fresh lavender blooms in our Ayurvedic kitchen. ",
  },
];
