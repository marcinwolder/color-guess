import React from 'react';

export const OptionButton = ({ label, onClick }) => {
	return (
		<button
			className='border-zinc-200 hover:bg-zinc-100 text-6xl lg:text-4xl w-1/3 lg:w-full p-2 text-center border rounded-md shadow-lg'
			onClick={onClick}>
			#{label}
		</button>
	);
};
