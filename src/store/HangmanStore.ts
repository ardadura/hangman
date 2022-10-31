import { defineStore } from "pinia";

export const useHangmanStore = defineStore("hangman", {
  state: () => ({
    isGameStartForOnce: false,
    gameStatus: false,
    selectedWord: { type: Object, default: null },
    selectedChars: [],
    wrongAttemptsCount: 0,
    completedWords: [],
    words: [],
  }),
  actions: {
    setGameStatus(state) {
      this.gameStatus = state;
    },
    setWords(words) {
      this.words = words;
    },
    setGameStart() {
      const randomWordForStart = this.words.filter((item) => !item.completed);
      this.setWord(
        randomWordForStart[(Math.random() * randomWordForStart.length) | 0]
      );
      this.setGameStatus(true);
      this.clearWrongAttempts();
      this.clearChars();
      this.isGameStartForOnce = true;
    },
    setWord(word) {
      this.selectedWord = word;
    },
    setChar: function (char) {
      this.selectedChars.push(char);
    },
    setWrongAttempts() {
      if (this.wrongAttemptsCount >= 5) return false;
      this.wrongAttemptsCount++;
      if (this.wrongAttemptsCount >= 5) {
        this.setGameStatus(false);
      }
    },
    setCompletedWords: function (word) {
      const wordItemId = this.words.find((item) => item.text === word).id;
      this.words[wordItemId].completed = true;
      this.completedWords.push(word);
    },
    clearChars: function () {
      this.selectedChars = [];
    },
    clearWrongAttempts() {
      this.wrongAttemptsCount = 0;
    },
  },
  getters: {
    getGameStatus: (state) => state.gameStatus,
    getSelectedWord: (state) => state.selectedWord,
    getSelectedChars: (state) => state.selectedChars,
    getWrongAttemptsCount: (state) => state.wrongAttemptsCount,
    getGameStartForOnce: (state) => state.isGameStartForOnce,
    getCompletedWorks: (state) => state.completedWords,
    getWords: (state) => state.words,
  },
});
