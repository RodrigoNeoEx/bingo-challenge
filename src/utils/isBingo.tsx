// código responsável por verificar se houve bingo (horizontal, vertical ou diagonal)

import type { GenerateCards } from "./generateCard";

// Função que verifica se houve bingo (horizontal, vertical ou diagonal)
export const checkBingo = (card: GenerateCards, drawnNumbers: number[]): boolean => {
  // Verificando linhas horizontais
  for (let i = 0; i < 5; i++) {
    // Verifica se todos os números da linha foram sorteados ou são "FREE"
    if (card[i].every((num) => num === "FREE" || drawnNumbers.includes(num))) {
      return true; // Linha completa (Bingo Horizontal)
    }
  }

  // Verificando colunas verticais
  for (let j = 0; j < 5; j++) {
    // Verifica se todos os números da coluna foram sorteados (ignora "FREE")
    if (card.every((row) => row[j] === "FREE" || drawnNumbers.includes(row[j] as number))) {
      return true; // Coluna completa (Bingo Vertical)
    }
  }

  // Verificando diagonal principal (top-left to bottom-right)
  if (
    card.every((row, index) => row[index] === "FREE" || drawnNumbers.includes(row[index] as number))
  ) {
    return true; // Diagonal principal (Bingo Diagonal)
  }

  // Verificando diagonal secundária (top-right to bottom-left)
  if (
    card.every((row, index) => row[4 - index] === "FREE" || drawnNumbers.includes(row[4 - index] as number))
  ) {
    return true; // Diagonal secundária (Bingo Diagonal)
  }

  return false; // Nenhum Bingo
};