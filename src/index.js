module.exports = function reverse (n) {
  let numStr = String(n);
  let mas = numStr.split('').reverse().join('');
  let result = mas.replace( '-', '');
  let num = Number(result);
  return num;
}
