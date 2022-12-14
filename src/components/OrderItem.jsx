import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';
import AppContext from '../context/AppContext';
import arrow from '@icons/flechita.svg';

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
			<div className='modificadorCantProductos'>
				<img src={arrow} alt="" />
				<span>508</span>
				<img src={arrow} alt="" />
			</div>
			<p>$ {product.precio}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
