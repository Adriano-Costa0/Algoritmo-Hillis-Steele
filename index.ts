const size = 32;
const array = [] as number[];

const reduce = (array: number[], step: number, size: number) => {
  const stepIndex = Math.pow(2, step);
  const newArray = [...array];

  Array.from({ length: size }).forEach((_, index) => {
    const sumIndex = index + stepIndex;
    if (array[index + stepIndex]) {
      newArray[sumIndex] = array[index] + array[index + stepIndex];
    }
  });

  if (stepIndex >= array?.length) {
    return array;
  }

  console.log(`step => 2 ^ ${step} = ${stepIndex} \n`);
  console.log(JSON.stringify(newArray), "\n \n");

  return reduce(newArray, step + 1, size);
};

let total = 0;

Array.from({ length: size }).forEach((_) => {
  const value = Math.floor(Math.random() * 10 + 1);
  array.push(value);
  total += value;
});

console.log("original", JSON.stringify(array) , "\n");

const reduceArray = reduce(array, 0, size);

console.log("TOTAL ===> ", total);
