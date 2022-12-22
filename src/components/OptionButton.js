import React from 'react';

export const OptionButton = ({ label, onClick }) => {
	return (
		<button
			className='border-zinc-200 hover:bg-zinc-100 text-4xl w-full p-2 text-center border rounded-md shadow-lg'
			onClick={onClick}>
			#{label}
		</button>
	);
};
