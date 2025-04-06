/**
 * Finds the missing number in an array of distinct integers in range [0, n]
 * @param {number[]} numbers - Array of integers
 * @return {number} - The missing number
 */
function findMissingNumberInSequence(numbers: number[]): number {
  const n = numbers.length;
  const expectedSum = ((n + 1) * n) / 2;

  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

/**
 * Determines whether an array contains any duplicate values
 * @param {number[]} numbers - Array of integers
 * @return {boolean} - True if duplicates exist, false otherwise
 */
function containsDuplicates(numbers: number[]): boolean {
  const seen = new Set<number>();

  for (const num of numbers) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

/**
 * Calculates the product of all array elements except the current element
 * without using division
 *
 * @param {number[]} numbers - Array of integers
 * @return {number[]} - Array where each element is the product of all elements except itself
 */
function productExceptSelf(numbers: number[]): number[] {
  const n = numbers.length;
  const result = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= numbers[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= numbers[i];
  }

  return result;
}

export { findMissingNumberInSequence, containsDuplicates, productExceptSelf };
