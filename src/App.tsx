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

  return (
    <Container >
      <Header>
        <h1>React App</h1>
      </Header>
      <HeroContainer>
        <BingoBoard drawnNumbers={drawn}/>
        <HeroAside>          
          <ActionsBtn drawnNumbers={drawn} onDraw={handleDraw} onReset={handleReset} />
          <BingoCard card={card} drawnNumbers={drawn} />
        </HeroAside>
      </HeroContainer>
    </Container>
  );
}

export default App;
