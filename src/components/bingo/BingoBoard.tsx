import React from "react";

const BingoBoard = () => {
  const numbers = Array.from({ length: 75 }, (_, i) => i + 1);

  return (
    <div className="grid md:grid-cols-8 lg:grid-cols-7  grid-cols-12 md:gap-2 max-w-md xl:max-w-none mx-auto mt-6">
      {numbers.map((num) => {
       
        return (
          <div
            key={num}
            className={`md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20 w-8 h-8 flex items-center justify-center rounded-md md:text-lg text-sm font-semibold border 
            `}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default BingoBoard;
