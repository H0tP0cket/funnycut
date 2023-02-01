export interface Haircut {
  name: string;
  popularity: number;
  length: number[];
  hairType: string[];
  style: "fade" | "buzz cut" | "undercut" | "combover" | "pompadour" | "longer";
  etc: any;
  image: string;
  bestForHeadShape: string[];
}

const haircuts: Haircut[] = [
  {
    name: "Fade with side part",
    popularity: 95,
    length: [3, 4, 5, 6, 7],
    hairType: ["straight"],
    style: "fade",
    etc: "Side part",
    image:
      "https://i.pinimg.com/564x/45/66/bf/4566bf53cf0113f6921bce26462647af.jpg",
    bestForHeadShape: ["heart, square, diamond"],
  },
  {
    name: "Burst Fade",
    popularity: 95,
    length: [2, 3, 4, 5, 6, 7, 8],
    hairType: ["straight"],
    style: "fade",
    etc: "Side part",
    image: "https://i.ytimg.com/vi/vs4QfDw_Bow/maxresdefault.jpg",
    bestForHeadShape: ["Diamond, Rectangle"],
  },
  {
    name: "Buzz cut",
    popularity: 85,
    length: [0],
    hairType: ["straight"],
    style: "buzz cut",
    etc: "None",
    image:
      "https://cdn-fnknc.nitrocdn.com/jwqHRGAzpUgGskUSHlppNQzwuXgXIKwg/assets/images/optimized/rev-971f4d9/wp-content/uploads/2021/11/Buzz-Cut-Fade_vinicius.rodrigues.barber.jpg",
    bestForHeadShape: [""],
  },
  {
    name: "Undercut",
    popularity: 80,
    length: [4, 5, 6],
    hairType: ["straight"],
    style: "undercut",
    etc: "None",
    image:
      "https://menshaircuts.com/wp-content/uploads/2021/08/curly-undercut-disconnected-drop-bald-fade-short-683x1024.jpg",
    bestForHeadShape: [""],
  },
  {
    name: "Pompadour",
    popularity: 75,
    length: [5, 6, 7, 8, 9],
    hairType: ["wavy", "straight"],
    style: "pompadour",
    etc: "None",
    image:
      "https://i.pinimg.com/564x/3d/31/af/3d31af59052a9ca30c6aa940ccc3d51c.jpg",
    bestForHeadShape: [""],
  },
  {
    name: "Quiff",
    popularity: 70,
    length: [3, 4, 5, 6],
    hairType: ["curly"],
    style: "combover",
    etc: "Quiff",
    image:
      "https://lovehairstyles.com/wp-content/uploads/2019/03/quiff-haircut-hairstyle-highlights-683x1024.jpg",
    bestForHeadShape: [""],
  },
  {
    name: "Slick back",
    popularity: 65,
    length: [6, 7, 8, 9],
    hairType: ["straight"],
    style: "combover",
    etc: "Slick back",
    image:
      "https://cdn.shopify.com/s/files/1/0162/2116/files/Low-Drop-Fade-Line-Up-Shiny-Slicked-Back-Top.jpg?v=1552374709",
    bestForHeadShape: [""],
  },
  {
    name: "Crew cut",
    popularity: 60,
    length: [1, 2],
    hairType: ["straight"],
    style: "buzz cut",
    etc: "None",
    image: "",
    bestForHeadShape: [""],
  },
  {
    name: "Side part",
    popularity: 55,
    length: [4, 5, 6],
    hairType: ["straight"],
    style: "combover",
    etc: "Side part",
    image: "",
    bestForHeadShape: ["heart, square, diamond"],
  },
  {
    name: "Fringe",
    popularity: 50,
    length: [3, 4, 5],
    hairType: ["curly"],
    style: "combover",
    etc: "Fringe",
    image: "",
    bestForHeadShape: [""],
  },
  {
    name: "Layered long hair",
    popularity: 95,
    length: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    hairType: ["straight"],
    style: "longer",
    etc: "None",
    image: "",
    bestForHeadShape: [""],
  },
  {
    name: "Beachy waves",
    popularity: 85,
    length: [6, 7, 8, 9],
    hairType: ["wavy"],
    style: "longer",
    etc: "None",
    image: "",
    bestForHeadShape: [""],
  },
  {
    name: "Braided hairstyle",
    popularity: 80,
    length: [
      6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    ],
    hairType: ["curly"],
    style: "longer",
    etc: "None",
    image: "",
    bestForHeadShape: [""],
  },
  {
    name: "Half-up half-down hairstyle",
    popularity: 75,
    length: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    hairType: ["straight"],
    style: "longer",
    etc: "None",
    image: "",
    bestForHeadShape: [""],
  },
  {
    name: "Top knot",
    popularity: 70,
    length: [8, 9, 10, 11, 12, 13, 14],
    hairType: ["straight"],
    style: "longer",
    etc: "None",
    image: "",
    bestForHeadShape: ["Diamond, Rectangle, Oval"],
  },
  {
    name: "Mullet",
    popularity: 70,
    length: [4, 5, 6, 7, 8],
    hairType: ["straight"],
    style: "fade",
    etc: "None",
    image: "",
    bestForHeadShape: [""],
  },
];
export default haircuts;
