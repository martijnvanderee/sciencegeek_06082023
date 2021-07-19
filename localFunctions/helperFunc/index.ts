export const getLengthOfArray = (array: any[]) => array.length

export const convertNumberToArray = (num: number) => Array.from(Array(num).keys())

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

//enter array --> shuffle.next().value
function* getShuffle(array: number[]): Generator<number> {
  var i = array.length;

  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  }
}

export { getShuffle }