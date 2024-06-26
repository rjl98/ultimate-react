// function squareDigits(nums) {
//   const digits = nums.toString().split("");
//   let arr = [];
//   for (const num of digits) {
//     const squares = Math.pow(num, 2).toString();
//     arr.push(squares);
//   }
//   return parseInt(arr.join(""));
// }
// console.log(squareDigits(3212));

var isSquare = function (n) {
  const perfect = Math.sqrt(n);
  console.log(perfect);
  if (perfect % 1 === 0) {
    return true;
  } else {
    return false;
  }
};
const results = isSquare(8);
console.log(results);
