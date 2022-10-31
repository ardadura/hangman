export function findStringFromCharCode(charCode) {
  return String.fromCharCode(charCode);
}
export function checkCharInWord(word, value) {
  return word.includes(value);
}

export function removedSpaceInArray(array) {
  return array.filter(function (entry) {
    return entry.trim() != "";
  });
}
