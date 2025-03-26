// Componente responsavel por estilizar e gerar a cartela em formato de tabela para impressão
// Este componente não possibilida custumização para receber outros valores devido sua finalidade de impressão especifica

import React from "react";
import type { GenerateCards as BingoCardType } from "../../utils/generateCard";


const CardPrinter: React.FC<{ card: BingoCardType }> = ({ card }) => {
  const headers = ["B", "I", "N", "G", "O"];

  // Função para gerar o conteúdo HTML para impressão
  // Função gerada no gpt4
  const printCard = () => {
    // Criar um iframe invisível
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "none";

    // Adicionar o iframe ao corpo do documento
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;

    if (doc) {
      // Escrever o conteúdo HTML no iframe
      doc.open();
      doc.write('<html><head><title>Cartela de Bingo</title>');
      doc.write('<style>');
      doc.write(`
        body { font-family: Arial, sans-serif; }
        table { 
          width: 100%; 
          border-collapse: collapse; 
          margin: 20px 0;
        }
        td, th { 
          border: 1px solid black; 
          padding: 12px;
          text-align: center;
          font-size: 18px;
          width: 20%;
        }
        td {
          height: 50px;
        }
      `);
      doc.write('</style>');
      doc.write('</head><body>');
      doc.write('<h2 style="text-align: center;">Cartela de Bingo</h2>');
      doc.write('<table>');
      doc.write('<thead><tr>' + headers.map((header) => `<th>${header}</th>`).join('') + '</tr></thead>');
      doc.write('<tbody>');
      card.forEach((row) => {
        doc.write('<tr>');
        row.forEach((cell) => {
          doc.write(`
            <td class="${cell === "FREE" ? "free-cell" : ""}">
              ${cell}
            </td>
          `);
        });
        doc.write('</tr>');
      });
      doc.write('</tbody></table>');
      doc.write('</body></html>');
      doc.close();

      // Chama a impressão após o conteúdo estar carregado
      iframe.onload = () => {
        iframe.contentWindow?.print();
        document.body.removeChild(iframe); // Remove o iframe após a impressão
      };
    }
  };

  return (
    <div>
      <button
        onClick={printCard}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Imprimir Cartela
      </button>
    </div>
  );
};

export default CardPrinter;
