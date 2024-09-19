export function generateRandomNumbers(
  size: number,
  min: number,
  max: number,
  fluctuation: number
): number[] {
  const numbers: number[] = []
  let previousNum = Math.floor(Math.random() * (max - min + 1)) + min

  for (let i = 0; i < size; i++) {
    let randomNum = previousNum + Math.floor(Math.random() * (fluctuation * 2 + 1)) - fluctuation
    randomNum = Math.max(min, Math.min(max, randomNum))

    numbers.push(randomNum)
    previousNum = randomNum
  }

  return numbers
}
