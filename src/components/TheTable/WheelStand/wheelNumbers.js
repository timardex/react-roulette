const numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,1,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
const wheelNumbers = numbers.map((item, index) => {
  const number = item;
  const color = item === 0 ? 'green' : index % 2 !== 0 && item !== 0 ? 'red' : 'black';
  return { number, color };
});

export default wheelNumbers;
