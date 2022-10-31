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
  { text: "HOME", difficulty: "easy" },
  { text: "HAMBURGER", difficulty: "normal" },
  { text: "GO AWAY", difficulty: "hard" },
  { text: "CASABLANCA", difficulty: "normal" },
  { text: "CAR", difficulty: "easy" },
  { text: "CONGRATULATIONS", difficulty: "hard" },
];
