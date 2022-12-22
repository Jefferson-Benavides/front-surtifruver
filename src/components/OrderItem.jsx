import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';
import AppContext from '../context/AppContext';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.urlImage} alt={product.nombre} />
			</figure>
			<p>{product.nombre}</p>
			<p>$ {product.precio}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
