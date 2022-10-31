import { findStringFromCharCode } from "@/utils/helperFunctions";

export const GAME_LIST = [
  {
    name: "Hangman",
    image: "https://picsum.photos/200/300",
    readyToPlay: true,
    to: "hangman",
  },
  {
    name: "Tic Tac Toe",
    image: "https://picsum.photos/200/301",
    readyToPlay: false,
    to: "dashboard",
  },
  {
    name: "Tic Tac Toe",
    image: "https://picsum.photos/200/302",
    readyToPlay: false,
    to: "dashboard",
  },
  {
    name: "Simon Says",
    image: "https://picsum.photos/200/303",
    readyToPlay: false,
    to: "dashboard",
  },
  {
    name: "Quiz",
    image: "https://picsum.photos/201/300",
    readyToPlay: false,
    to: "dashboard",
  },
  {
    name: "1010",
    image: "https://picsum.photos/202/300",
    readyToPlay: false,
    to: "dashboard",
  },
  {
    name: "Mergelt",
    image: "https://picsum.photos/203/300",
    readyToPlay: false,
    to: "dashboard",
  },
  {
    name: "This or That",
    image: "https://picsum.photos/204/300",
    readyToPlay: false,
    to: "dashboard",
  },
];

export const INITIAL_ALPHABET = Array.from(Array(26)).map((e, i) => {
  return {
    text: findStringFromCharCode(i + 65),
    value: findStringFromCharCode(i + 65),
    disabled: false,
  };
});

export let WORDS = [
  { text: "HOME", difficulty: "easy", completed: false, id: 0 },
  { text: "HAMBURGER", difficulty: "normal", completed: false, id: 1 },
  { text: "GO AWAY", difficulty: "hard", completed: false, id: 2 },
  { text: "CASABLANCA", difficulty: "normal", completed: false, id: 3 },
  { text: "CAR", difficulty: "easy", completed: false, id: 4 },
  { text: "CONGRATULATIONS", difficulty: "hard", completed: false, id: 5 },
];
