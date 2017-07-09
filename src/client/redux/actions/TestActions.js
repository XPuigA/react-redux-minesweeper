export const NEW_RANDOM = 'NEW_RANDOM_TEST';

export function newRandom() {
  return {
    type: NEW_RANDOM,
    number: Math.random(),
  };
}
