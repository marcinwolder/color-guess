import React from 'react';
import './index.css';

import useQuiz from './hooks/quiz';
import { OptionButton } from './components/OptionButton';

const genRandomColors = (num) => {
	const bufor = '0123456789ABCDEF';

	const colors = [];

	for (let i = 0; i < num; i++) {
		let newColor = '';
		for (let i = 6; i > 0; i--) {
			newColor += bufor[Math.floor(Math.random() * 16)];
		}
		colors.push(newColor);
	}

	const randomIndex = Math.floor(Math.random() * num);

	return [colors, randomIndex];
};

function App() {
	const [colors, random] = genRandomColors(3);

	const [pickAnswer, score] = useQuiz(random);
	return (
		<div className='flex flex-col items-center gap-4 p-8'>
			<p className='font-semibold text-xl'>Guess the color challenge:</p>
			<div
				style={{ backgroundColor: `#${colors[random]}` }}
				className='h-32 w-72 bg-zinc-800 border-2 border-stone-800 shadow-lg'
			/>
			<div className='flex gap-2'>
				<OptionButton
					label={colors[0]}
					onClick={() => {
						pickAnswer(0);
					}}
				/>
				<OptionButton
					label={colors[1]}
					onClick={() => {
						pickAnswer(1);
					}}
				/>
				<OptionButton
					label={colors[2]}
					onClick={() => {
						pickAnswer(2);
					}}
				/>
			</div>
			<p>Current score: {score}</p>
		</div>
	);
}

export default App;
