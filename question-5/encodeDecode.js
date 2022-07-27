const encode = (string) => {
  return string.replace(
    /(\w)\1+/g,
    (match, value) => `${match.length}${value} `
  );
};

const decode = (string) => {
  return string.replace(/(\d+)(\w)/g, (x, y, z) => z.repeat(y));
};

console.log(encode("wwwiiuuuu")); // 3w2i4u
console.log(decode("2u3a4o")); // uuaaaoooo
