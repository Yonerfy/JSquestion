const removeDuplicateValues = (array) => {
  array.reduce((acc, value) => {
    return acc.include(value) ? acc : [...acc, value];
  }, []);
};

console.log(
  removeDuplicateValues(["one", "two", "one", "three", "three", "two"])
); // ['one','two','three']
