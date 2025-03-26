export type GenerateCards = (number | "FREE")[][];

const getRandomNumbers = (min: number, max: number, count: number): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(num);
  }
  return Array.from(numbers);
};

export const generateBingoCard = (): GenerateCards => {
  const columns = [
    getRandomNumbers(1, 15, 5),    // B
    getRandomNumbers(16, 30, 5),   // I
    getRandomNumbers(31, 45, 5),   // N
    getRandomNumbers(46, 60, 5),   // G
    getRandomNumbers(61, 75, 5),   // O
  ];

  const card: GenerateCards = Array.from({ length: 5 }, (_, rowIndex) =>
    columns.map((col) => col[rowIndex])
  );

  card[2][2] = "FREE";

  return card;
};