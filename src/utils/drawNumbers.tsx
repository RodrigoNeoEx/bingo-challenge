export const drawNumber = (drawn: number[], total: number): number[] => {
  if (drawn.length >= total) return drawn;

  // Criar um Set com todos os números possíveis (1 a 75)
  const availableNumbers = new Set<number>(Array.from({ length: total }, (_, i) => i + 1));

  // Remover os números já sorteados
  drawn.forEach((num) => availableNumbers.delete(num));

  // Se houver números disponíveis, sorteie um aleatório
  if (availableNumbers.size > 0) {
    const randomIndex = Math.floor(Math.random() * availableNumbers.size);
    const randomNumber = Array.from(availableNumbers)[randomIndex];

    return [...drawn, randomNumber].sort((a, b) => a - b); // Retorna a lista com o novo número sorteado
  }

  return drawn; // Retorna a lista original se não houver mais números disponíveis
};
