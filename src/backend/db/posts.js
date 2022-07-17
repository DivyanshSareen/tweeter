import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "“You miss 100% of the shots you don't take. - Wayne Gretzky” - Michael Scott",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "michael",
    firstName: "Michael",
    lastName: "Scott",
    userImage: "user_profiles/michael.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "thenarddog",
        firstName: "Andy",
        lastName: "Bernard",
        profilePicture: "user_profiles/andy.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "piartehunter",
        firstName: "Zoro",
        lastName: "Roronoa",
        profilePicture: "user_profiles/zoro.jpg",
        text: "Where am I?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "I'm not superstitious, but I am a little stitious.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "michael",
    firstName: "Michael",
    lastName: "Scott",
    userImage: "user_profiles/michael.png",
    comments: [
      {
        _id: uuid(),
        username: "Bancobanco",
        firstName: "Banco",
        lastName: "Banco",
        profilePicture: "user_profiles/banco.png",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "dwight",
        firstName: "Dwight",
        lastName: "Schrute",
        text: "Wow!",
        profilePicture: "user_profiles/dwight.jpg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "dwight",
    firstName: "Dwight",
    lastName: "Schrute",
    userImage: "user_profiles/dwight.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Bancobanco",
        firstName: "Banco",
        lastName: "Banco",
        profilePicture: "user_profiles/banco.png",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "dwight",
        firstName: "Dwight",
        lastName: "Schrute",
        profilePicture: "user_profiles/dwight.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "I signed up for Second Life about a year ago. Back then, my life was so great that I literally wanted a second one. Absolutely everything was the same. Except I could fly.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "dwight",
    firstName: "Dwight",
    lastName: "Schrute",
    userImage: "user_profiles/dwight.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Bancobanco",
        firstName: "Banco",
        lastName: "Banco",
        profilePicture: "user_profiles/banco.png",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "dwight",
        firstName: "Dwight",
        lastName: "Schrute",
        profilePicture: "user_profiles/dwight.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
