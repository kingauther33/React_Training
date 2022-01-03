import React from 'react';

const DUMMY_DATA = [
	{
		name: 'An',
		age: 18,
	},
	{
		name: 'Khoi',
		age: 19,
	},
];

const functionA = (a) => a + 1;

// FUNCTIONAL COMPONENT
const DEMO = () => {
	return (
		<ul>
			{
				// EXPRESSION, STATEMENT
				DUMMY_DATA.map((person) => (
					<li>
						<p>{person.name}</p>
						<p>{person.age}</p>
					</li>
				))
			}
		</ul>
	);
};

export default DEMO;
