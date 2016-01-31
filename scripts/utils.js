let Utils = {};

Utils.shuffle = (array) => {
  let shuffled = [];
  let randomIndex;
  let temp;

  array.forEach((element, index) => {
    shuffled.push(element);
    randomIndex = Utils.getRandomInteger(0, index);
    temp = shuffled[randomIndex];
    shuffled[randomIndex] = shuffled[index];
    shuffled[index] = temp;
  });

  return shuffled;
};

// min inclusive; max inclusive
Utils.getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Utils.getNextIndexWithRepeat = (index, array) => {
  let nextIndex = index + 1;

  if(nextIndex >= array.length) {
    nextIndex = 0;
  }

  return nextIndex;
};

export default Utils;
