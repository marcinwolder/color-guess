import React, { useState } from 'react';
import ColorDisplay from './components/ColorDisplay';
import RenderOptions from './components/RenderOptions';

const genRandomColors = (num) => {
  const buffor = '0123456789ABCDEF';

  const colors = [];

  for (let i = 0; i < num; i++) {
    let newColor = '#';
    for (let i = 6; i > 0; i--) {
      newColor += buffor[Math.floor(Math.random() * 16)];
    }
    colors.push(newColor);
  }

  const randomIndex = Math.floor(Math.random() * num);

  return [colors, randomIndex];
};

function App() {
  const divCss = {
    width: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const [score, setScore] = useState([0]);
  const colorData = genRandomColors(3);
  const [colors, randomIndex] = colorData;
  const increaseScore = () => {
    setScore([Number(score) + 1]);
  };
  const resetScore = () => {
    setScore([0]);
  };
  return (
    <div style={divCss}>
      <ColorDisplay text={score[0]} color={colors[randomIndex]} />
      <RenderOptions
        handleCorrectAns={increaseScore}
        handleFalseAns={resetScore}
        optionsArr={colors}
        indexOfTrue={randomIndex}
      />
    </div>
  );
}

export default App;
