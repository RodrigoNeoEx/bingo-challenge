// Componente responsável por estilizar e gerar a cartela de bingo
// Recebe Props card e drawnNumbers

import React from "react";
import type { GenerateCards as BingoCardType } from "../../utils/generateCard";
import CardPrinter from "./CardPrinter";

type Props = {
  card: BingoCardType;
  drawnNumbers: number[];
};

const BingoCard: React.FC<Props> = ({ card, drawnNumbers }) => {
  const headers = ["B", "I", "N", "G", "O"];

  return (
    <div className="flex-row justify-center items-center max-h-fit max-w-fit border-4 border-gray-800 rounded-xl overflow-hidden shadow-lg bg-white">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {headers.map((letter) => (
              <th
                key={letter}
                className="p-2 text-center font-extrabold text-xl bg-gray-800 text-white border-b border-gray-600"
              >
                {letter}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {card.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isMarked =
                  cell === "FREE" || (typeof cell === "number" && drawnNumbers.includes(cell));

                return (
                  <td
                    key={cellIndex}
                    className={`p-4 text-center text-lg font-semibold border border-gray-300 md:h-20 md:w-20 sm:w-16 sm:h-16 h-14 w-14 ${
                      cell === "FREE"
                        ? "bg-yellow-300 text-black"
                        : isMarked
                        ? "bg-green-300 text-black"
                        : "text-gray-800"
                    }`}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <CardPrinter card={card} />
    </div>
  );
};

export default BingoCard;
