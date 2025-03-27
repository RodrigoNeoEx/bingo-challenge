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
import { checkBingo } from './utils/isBingo';
import { drawNumber } from './utils/drawNumbers';

const TOTAL = 75;

function App() {
  const [drawn, setDrawn] = useState<number[]>([]);
  const [highlightedNumber, setHighlightedNumber] = useState<number | null>(null); 
  const [isDrawing, setIsDrawing] = useState(false); 
  const [card] = useState(() => generateBingoCard()); 
  
  const handleDraw = () => {
    setIsDrawing(true); 
    let timer: NodeJS.Timeout;  

    timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 75);
      setHighlightedNumber(randomIndex); 
    }, 100); 
  
    setTimeout(() => {
      const drawnNumber = drawNumber(drawn, TOTAL); 
      setHighlightedNumber(drawnNumber[drawnNumber.length - 1]); 
      setDrawn(drawnNumber);
      setIsDrawing(false); 
      clearInterval(timer); 
    }, 2000); 
  };
  

  const handleReset = () => {
    setDrawn([]);
    setHighlightedNumber(null); 
  };

  const bingo = checkBingo(card, drawn);

  return (
    <Container>
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
        <BingoBoard drawnNumbers={drawn} highlightedNumber={highlightedNumber} isDrawing={isDrawing} />
        <HeroAside>
          <ActionsBtn drawnNumbers={drawn} onDraw={handleDraw} onReset={handleReset} isBlocked={bingo} />
          <BingoCard card={card} drawnNumbers={drawn} />
        </HeroAside>
      </HeroContainer>
    </Container>
  );
}

export default App;
