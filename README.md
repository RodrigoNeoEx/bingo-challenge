
# 🎯 Bingo Challenge Project

Este é um jogo de Bingo interativo, desenvolvido com React, Tailwind CSS e TypeScript. Ele permite aos usuários sortearem números de bingo, visualizar uma cartela de bingo gerada dinamicamente e acompanhar o progresso do jogo em tempo real.

Quer testar o projeto? Click no Link ao Lado ([BingoChallenge](https://bingo-challenge.vercel.app/).)

---
Optei por CSR (renderização no lado do cliente) para este projeto, pois ele oferece várias vantagens para um jogo interativo como o Bingo:

Desempenho e Interatividade: O CSR permite uma atualização rápida e eficiente no navegador, sem necessidade de chamadas constantes ao servidor, garantindo uma experiência fluida e responsiva.

Simplicidade: O jogo não requer um backend. Toda a lógica do sorteio e interação com a cartela é feita no cliente, simplificando a arquitetura e reduzindo a carga no servidor.

Economia de recursos: Com o CSR, o servidor apenas serve arquivos estáticos (HTML, CSS, JS), e o cliente processa as interações, o que torna a aplicação mais escalável e econômica.

Experiência do Usuário: O jogo é dinâmico e sem recarregamentos de página, proporcionando uma interação em tempo real e uma experiência mais intuitiva e divertida.

Utilizado "Tipagem" no mesmo arquivo devido entender que o projeto não escalaria

---

## 📂 Estrutura do Projeto

```
bingo-challenge/
│
├── src/
│   ├── components/        # Componentes reutilizáveis como BingoBoard, BingoCard, etc.
│   ├── utils/             # Funções auxiliares, como geração de cartelas e verificação de Bingo
│   ├── App.tsx            # Componente principal
│   ├── index.css          # Estilos globais
│   └── tailwind.config.js # Configuração do Tailwind
│
├── public/
│   └── index.html         # Arquivo HTML principal
│
├── package.json           # Dependências e scripts do projeto
└── README.md              # Este arquivo

```

---

## 🛠️ Tecnologias Utilizadas e Motivos

### ⚛️ React 18
- Framework principal da aplicação.
- Escolhido por sua flexibilidade, componentização e alta produtividade no desenvolvimento.

---

### 🎨 Tailwind CSS
- Framework de estilos utilitário.
- Motivo: Permite criar layouts responsivos e modernos de forma rápida, com classes semânticas e manutenção simplificada.

---

### 🚀 TypeScript
- Superset do JavaScript.
- Motivo: Tipagem estática para maior segurança, previsibilidade e melhor experiência de desenvolvimento (autocompletes, validações).

---

## 💡 Funcionalidades Implementadas

Sorteio de Números: Gera números aleatórios entre 1 e 75, sem repetições.
Reiniciar Jogo: Botão para reiniciar o jogo e gerar uma nova cartela.
Cartela de Bingo: Cartela gerada dinamicamente de acordo com as regras do bingo.
Marcação de Números: Os números sorteados são marcados na cartela.
Detecção de Bingo: A verificação automática de Bingo (horizontal, vertical ou diagonal).
Interface Responsiva: Design adaptável a diferentes tamanhos de tela.

## 💡 Funcionalidade Extra

Animação de Cor: A palavra "BINGO" possui uma animação de rotação de cores para dar destaque.
Animação de Roleta: O board se colore aleatoriamente simulando um sorteio.
Exibir a cartela gerada em formato de tabela para impressão através de um iframe.
Implementado opção para alternar entre modos claro e escuro.

---

## 🛠️ Melhorias Futuras

Sistema de Pontuação: Adicionar contagem de pontos por cada "Bingo".


---

## 📱 Mobile First

O layout foi construído inicialmente pensando em dispositivos móveis, garantindo boa usabilidade em telas pequenas. Ajustes para telas maiores foram aplicados com breakpoints do Tailwind.

---

## 🚀 Como Executar

## Requisitos
Node.js (>= 16.0.0)
npm (>= 8.0.0)

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/bingo-challenge.git
cd bingo-challenge


# Instalar dependências
npm install

# Rodar o projeto
npm run dev

Acesse a aplicação em seu navegador através de http://localhost:3000.


Scripts Disponíveis
npm run dev: Inicia o servidor de desenvolvimento com hot-reload.

npm run build: Compila o projeto para produção.

npm run lint: Executa o linting para verificar problemas de código.

npm run start: Inicia a aplicação após a construção.
```

## 🧪 Como Executar Testes

Após instalar as dependências com `npm install`, execute:

```bash
npm test
```

Este comando utiliza o **react-scripts** para rodar os testes configurados no projeto.

---

## 📮 Contato

Projeto desenvolvido por [Rodrigo NeoEx](https://github.com/RodrigoNeoEx).  
Dúvidas ou sugestões? Abra uma issue no repositório.
