import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import '@styles/OrderItem.scss';

import DeleteIcon from "@assets/icons/icons-general/x.png";
const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[1]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}.00</p>
			<img
				src={DeleteIcon}
				className="OrderItem-delete"
				alt="close"
				onClick={() => handleRemove(product)}
			/>
		</div>
	);
}

export { OrderItem };
