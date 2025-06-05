// Componente que renderiza os botões de ações do jogo de bingo
// Botão "Sortear Número" sorteia um número aleatório de 1 a 75
// Botão "Reiniciar" limpa a lista de números sorteados
// Exibe a quantidade de números restantes para sorteio
// Desabilita os botões quando todos os números já foram sorteados ou o jogo está bloqueado
// Utiliza um estado local para desabilitar o botão de sorteio por 2 segundos após cada sorteio
// O botão de sorteio é desabilitado quando o jogo está bloqueado ou todos os números já foram sorteados

import React, { useState } from "react";

type Props = {
  drawnNumbers: number[];
  onDraw: () => void;
  onReset: () => void;
  isBlocked: boolean;
};

const ActionsBtn: React.FC<Props> = ({ drawnNumbers, onDraw, onReset, isBlocked }) => {
  const [disabled, setDisabled] = useState(false);
  const maxNumbers = 75;
  const remaining = maxNumbers - drawnNumbers.length;

  const handleDraw = () => {
    setDisabled(true);
    onDraw();
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <button
          onClick={handleDraw}
          disabled={drawnNumbers.length >= maxNumbers || isBlocked || disabled}
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
