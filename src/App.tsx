import './App.css';
import Container from './components/container/Container';
import Header from './components/header/Header';
import HeroContainer from './components/hero/HeroContainer';
import BingoBoard from './components/bingo/BingoBoard';
import BingoCard from './components/bingo/BingoCard';
import { useState } from 'react';
import { generateBingoCard } from './utils/generateCard';
import ActionsBtn from './components/bingo/ActionsBtn';
import HeroAside from './components/hero/HeroAside';
import { checkBingo } from './utils/isBingo';

const TOTAL = 75;


function App() {
  const [drawn, setDrawn] = useState<number[]>([]);
  const [card] = useState(() => generateBingoCard()); // ✅ isso fixa a cartela

  const handleDraw = () => {
    if (drawn.length >= TOTAL) return;

    let newNumber: number;
    do {
      newNumber = Math.floor(Math.random() * TOTAL) + 1;
    } while (drawn.includes(newNumber));

    setDrawn((prev) => [...prev, newNumber].sort((a, b) => a - b));
  };

  const handleReset = () => setDrawn([]);

  const bingo = checkBingo(card, drawn);

  return (
    <Container >
      <Header>
      {bingo     
           ? (
            <p className="flex-row flex items-center text-4xl font-bold">
              🎉
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 filter animate-hue-rotate">  BINGOOOOOO! </h1>
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
