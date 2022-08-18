import sa from "./img/section-a.webp";
import sb from "./img/section-b.webp";
import sc from "./img/section-c.webp";
import sd from "./img/section-d.webp";
import se from "./img/section-e.webp";
import sf from "./img/section-f.webp";
import falcon from "./img/falcon-9.webp";
import falconHeavy from "./img/falcon-heavy.webp";
import dragon from "./img/dragon.webp";

export const data = [
  {
    id: 1,
    img: sa,
    title: "UpComping Launch",
    title_b: "CRS-25 Mission",
  },
  {
    id: 2,
    img: sb,
    title: "Recent Launch",
    title_b: "StarLink Mission",
  },
  {
    id: 3,
    img: sc,
    title: "Recent Mission",
    title_b: "SS-22 Mission",
  },
  {
    id: 4,
    img: sd,
    title: "Recent Mission",
    title_b: "Globalstart FM15 Mission",
  },
  {
    id: 5,
    img: se,
    title: "",
    title_b: "Starship update",
  },
  {
    id: 6,
    img: sf,
    title: "",
    title_b: "Starship to add Nasa astronauts to moon",
  },
];

export const inner = [
  {
    img: falcon,
    h3: "FALCON 9",
    p: "FIRSTORBIT CLASS ROCKET CAPCABLE ABEASD",
    link: "/falcon9",
    targetValue: {
      Ta: 15,
      Tb: 10,
      Tc: 20,
    },
  },
  {
    img: falconHeavy,
    h3: "FALCON heavy",
    p: "FIRSTORBIT CLASS ROCKET CAPCABLE ABEASD",
    link: "/falcon-heavy",
  },

  {
    img: dragon,
    h3: "Dargon",
    p: "FIRSTORBIT CLASS ROCKET CAPCABLE ABEASD",
    link: "/dargon",
  },
  {
    img: dragon,
    h3: "Dream",
    p: "Working",
    link: "/dream",
  },
  {
    img: dragon,
    h3: "StarShip",
    p: "Working",
    link: "/starship",
  },
  {
    img: dragon,
    h3: "human spaceflight",
    p: "Working",
    link: "/human-spaceflight",
  },
  {
    img: dragon,
    h3: "Ride Share",
    p: "Working",
    link: "/rideshare",
  },
  {
    img: dragon,
    h3: "Shop",
    p: "Working",
    link: "/shop",
    targetValue: {
      Ta: 15,
      Tb: 10,
      Tc: 20,
    },
  },
];
