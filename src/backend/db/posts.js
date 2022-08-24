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
      "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face..",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "piratehunter",
    firstName: "Zoro",
    lastName: "Roronoa",
    userImage: "user_profiles/zoro.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: "I love inside jokes. I hope to be a part of one someday.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "michael",
    firstName: "Michael",
    lastName: "Scott",
    userImage: "user_profiles/michael.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Andy Bernard does not lose contests. He wins them. Or he quits them. Because they're unfair.",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    username: "thenarddog",
    firstName: "Andrew",
    lastName: "Bernard",
    userImage: "user_profiles/andy.jpg",
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
      likeCount: 25,
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
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.",
    likes: {
      likeCount: 7,
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
        text: "True that!",
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
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    username: "dwight",
    firstName: "Dwight",
    lastName: "Schrute",
    userImage: "user_profiles/dwight.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "“You miss 100% of the shots you don't take. - Wayne Gretzky” - Michael Scott",
    likes: {
      likeCount: 4,
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
];
