const map = (array, callback) => {
  array.reduce(
    acc,
    (value) => {
      return [...acc, callback(value)];
    },
    []
  );
};

console.log(map([1, 2, 3], (v) => v + 1)); // [2,3,4]
