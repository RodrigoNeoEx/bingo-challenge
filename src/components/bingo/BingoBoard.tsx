// Componente responsável por estilizar e gerar a board dos sorteios
// Recebe Props drawnNumbers
// drawnNumbers: números sorteados
// Retorna a board com os números sorteados e os deixa marcados

import React from "react";

type BingoBoardProps = {
  drawnNumbers: number[];
};

const BingoBoard: React.FC<BingoBoardProps> = ({ drawnNumbers }) => {
  const numbers = Array.from({ length: 75 }, (_, i) => i + 1);

  return (
    <div className="grid md:grid-cols-8 lg:grid-cols-7 xl:grid-cols-9 grid-cols-12 md:gap-2 max-w-md xl:max-w-none mx-auto mt-6">
      {numbers.map((num) => {
        const isDrawn = drawnNumbers.includes(num);
        return (
          <div
            key={num}
            className={`md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 w-8 h-8 flex items-center justify-center rounded-md md:text-lg text-sm font-semibold border 
              ${isDrawn ? "bg-blue-600 text-white border-blue-800 shadow-lg" : "bg-gray-100 text-gray-400 border-gray-300"}
              transition duration-300`}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default BingoBoard;
