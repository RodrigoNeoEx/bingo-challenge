// Pagina principal do projeto e unica neste momento
// Se utiliza da pasta utils para acoplar as funções de geração de cartela e verificação de bingo
// Se utiliza da pasta components para acoplar os componentes de bingo, header e container

import './App.css';
import Container from './components/container/Container';
import Header from './components/header/Header';
import HeroContainer from './components/hero/HeroContainer';
import BingoBoard from './components/bingo/BingoBoard';
import BingoCard from './components/bingo/BingoCard';
import ActionsBtn from './components/bingo/ActionsBtn';
import HeroAside from './components/hero/HeroAside';
import { useState } from 'react';
import { generateBingoCard } from './utils/generateCard';
import { checkBingo, } from './utils/isBingo';
import { drawNumber } from './utils/drawNumbers';

const TOTAL = 75;


function App() {
  const [drawn, setDrawn] = useState<number[]>([]);
  const [card] = useState(() => generateBingoCard()); // ✅ isso fixa a cartela

  const handleDraw = () => {
    setDrawn((prev) => drawNumber(prev, TOTAL));
  };

  const handleReset = () => setDrawn([]);

  const bingo = checkBingo(card, drawn);

  return (
    <Container >
      <Header>
      
      {bingo     
           ? (
            <p className="flex-row flex items-center text-4xl font-bold w-10/12 justify-center">
              🎉
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 filter animate-hue-rotate">BINGOOOOOO!</h1>
              🎉
            </p>
          )
           : <h1 className="sm:text-5xl font-bold text-3xl">Jogue bingo e se divirta!</h1>      
         }        

      </Header>
      <HeroContainer>
        <BingoBoard drawnNumbers={drawn}/>
        <HeroAside>          
          <ActionsBtn drawnNumbers={drawn} onDraw={handleDraw} onReset={handleReset} isBlocked={bingo} />
          <BingoCard card={card} drawnNumbers={drawn} />
        </HeroAside>
      </HeroContainer>
    </Container>
  );
}

export default App;
