import React from 'react';

export const OptionButton = ({ label, onClick }) => {
	return (
		<button
			className='border-zinc-200 hover:bg-zinc-100 w-20 p-2 text-center border rounded-md shadow-lg'
			onClick={onClick}>
			#{label}
		</button>
	);
};
