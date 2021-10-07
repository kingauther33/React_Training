import React, { useState } from 'react';

const Product = (props) => {
	const [cart, setCart] = useState(0);

	const addToCart = () => {
		setCart(cart + 1);
	};

	return (
		<div>
			<h2>{props.name}</h2>
			<p>{props.price}</p>
			<i>Cart: {cart}</i>
			<div>
				<button type="button" onClick={addToCart} className="text-primary">
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
