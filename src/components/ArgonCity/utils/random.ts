/**
 * Picks a random element from an array and return it along with its index.
 * @param array Array from which element should be picked.
 * @returns Array where [element, index]
 */
export function pickRandomFromArray<T>(array: T[]): [T, number] {
  if (array.length === 0) {
    throw new Error(`Cannot process an empty array`);
  }

  const randIdx = Math.floor(Math.random() * array.length);

  return [array[randIdx], randIdx];
}

/**
 * Picks a random integer from a range [min, max)
 * @param min Min integer limit
 * @param max Max integer limit (excluded)
 * @returns The chosen random number
 */
export function pickRandomInteger(min: number, max: number): number {
  if (min > max) {
    throw new Error(`min[${min}] cannot be greater than max[${max}]`);
  }

  return min + Math.floor(Math.random() * (max - min));
}
