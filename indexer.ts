import { InvalidMaxError } from "./errors.ts";

/**
 * A class that generates an index number.
 */
export class Indexer {
  #max: number;
  #val: number;

  /**
   * Constructs a new Indexer.
   *
   * @param max The maximum value of the index.
   * @throws {InvalidMaxError} If the max is not an integer greater than 1.
   */
  constructor(max?: number) {
    if (max != null && (!Number.isInteger(max) || max < 2)) {
      throw new InvalidMaxError(
        `The max must be an integer greater than 1 but ${max} has given`,
        max,
      );
    }
    this.#max = max ?? Number.MAX_SAFE_INTEGER;
    this.#val = -1;
  }

  /**
   * Returns the next index number and increments the index number.
   *
   * It starts from 0 and increments the index number by 1 each time it is called.
   * It resets the index number and returns 0 if the index number is greater than or equal to the max.
   */
  next(): number {
    if (this.#val >= this.#max) {
      this.#val = -1;
    }
    this.#val += 1;
    return this.#val;
  }
}
