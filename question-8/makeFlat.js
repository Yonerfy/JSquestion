const makeFlat = (array) => {
  array.reduce((item) => {}, []);
};

console.log(makeFlat(["one", ["two", "three"], ["four", ["five"]]])); // ['one','two','three','four','five']
