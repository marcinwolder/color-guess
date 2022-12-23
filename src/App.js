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
			<p className='font-semibold text-6xl my-10'>Guess the color challenge:</p>
			<div
				style={{ backgroundColor: `#${colors[random]}` }}
				className='lg:h-64 h-96 lg:w-1/2 w-full mb-12 lg:mb-0 bg-zinc-800 border-2 border-stone-800 shadow-lg'
			/>
			<div className='flex flex-col items-center lg:flex-row w-full gap-2'>
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
			<p className='text-5xl mt-8 lg:text-3xl'>Current score: {score}</p>
		</div>
	);
}

export default App;
