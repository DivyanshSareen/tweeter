import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Banco",
    lastName: "Banco",
    username: "Bancobanco",
    password: "Banco123",
    profilePicture: "user_profiles/banco.png",
    description:
      "Learning Web Developement | 100 Days of Code | React and JavaScript | DSA | Blogging",
    portfolioURL: "https://divyanshsareen.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Michael",
    lastName: " Scott",
    username: "michael",
    password: "Michael123",
    profilePicture: "user_profiles/michael.png",
    description:
      "Regional Manager, Dunder Mifflin Inc. Scranton | Founder of Michael Scott Paper Company",
    portfolioURL: "https://characters.fandom.com/wiki/Michael_Scott",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Dwight",
    lastName: "Schrute",
    username: "dwight",
    password: "Dwight123",
    profilePicture: "user_profiles/dwight.jpg",
    description:
      "Assistant to the Regional Manager, Dunder Mifflin Scranton | Co-Head of Party Planning Committee | Salesman of the Year | Black Belt in Karate",
    portfolioURL: "https://characters.fandom.com/wiki/Dwight_Schrute",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Andy",
    lastName: "Bernard",
    username: "thenarddog",
    password: "Andy123",
    profilePicture: "user_profiles/andy.jpg",
    description:
      "Regional Director in Charge of Sales, Dunder Mifflin Stamford | went to Cornell University",
    portfolioURL: "https://characters.fandom.com/wiki/Andy_Bernard",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Zoro",
    lastName: "Roronoa",
    username: "piratehunter",
    password: "Zoro123",
    profilePicture: "user_profiles/zoro.jpg",
    description:
      "Best Swordsman | Three Sword Style | bounty: 320,000,000 belly | Vice Captain, Straw Hat Pirates",
    portfolioURL: "https://onepiece.fandom.com/wiki/Roronoa_Zoro",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
