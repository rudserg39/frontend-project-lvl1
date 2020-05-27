const MIN = 0;
export const MAX_INTEGER = 15;

export const getRandomInteger = (max) => Math.floor(Math.random() * (max - MIN + 1)) + MIN;
