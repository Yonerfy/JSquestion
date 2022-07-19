const isIsogram = (string) => {
  let process = string.toLowerCase();
  const newString = new Set(process);
  return newString.size < process.length ? false : true;
};

console.log(isIsogram("ambidExtrously")); // true
console.log(isIsogram("patteRN")); // false
