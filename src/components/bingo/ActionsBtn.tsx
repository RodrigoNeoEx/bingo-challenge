// Componente responsável pelos botões de ação do bingo
// Logica deste componente foi descentralizada para evitar acumulo de função em um único componente

import React from "react";

type Props = {
  drawnNumbers: number[];
  onDraw: () => void;
  onReset: () => void;
  isBlocked: boolean;
};

const ActionsBtn: React.FC<Props> = ({ drawnNumbers, onDraw, onReset, isBlocked }) => {
  const maxNumbers = 75;
  const remaining = maxNumbers - drawnNumbers.length;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <button
          onClick={onDraw}
          disabled={drawnNumbers.length >= maxNumbers || isBlocked}
          className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition disabled:opacity-40"
        >
          Sortear Número
        </button>
        <button
          onClick={onReset}
          className="px-6 py-2 bg-gray-300 text-gray-800 font-bold rounded hover:bg-gray-400 transition"
        >
          Reiniciar
        </button>
      </div>
      <span className="text-sm text-gray-600 dark:text-white">
        {remaining > 0
          ? `${remaining} número(s) restantes`
          : "Todos os números foram sorteados!"}
      </span>
    </div>
  );
};


export default ActionsBtn;
