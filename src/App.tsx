import './App.css';
import Container from './components/container/Container';
import Header from './components/header/Header';
import HeroContainer from './components/hero/HeroContainer';
import BingoBoard from './components/bingo/BingoBoard';
import BingoCard from './components/bingo/BingoCard';
import { useState } from 'react';
import { generateBingoCard } from './utils/generateCard';

function App() {
  const [drawn, setDrawn] = useState<number[]>([]);
  const [card] = useState(() => generateBingoCard()); // ✅ isso fixa a cartela

  return (
    <Container >
      <Header>
        <h1>React App</h1>
      </Header>
      <HeroContainer>
        <BingoBoard />
        <BingoCard card={card} drawnNumbers={drawn} />
      </HeroContainer>
    </Container>
  );
}

export default App;
