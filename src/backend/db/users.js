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
];
