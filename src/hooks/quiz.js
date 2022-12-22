import { useState } from 'react';

const Quiz = (rightAnswerIndex) => {
	const [score, setScore] = useState(0);
	const [buff, rerender] = useState(0);
	const pickAnswer = (index) => {
		if (index === rightAnswerIndex) setScore((score) => score + 1);
		else {
			setScore(0);
			rerender(buff + 1);
		}
	};
	return [pickAnswer, score];
};

export default Quiz;
