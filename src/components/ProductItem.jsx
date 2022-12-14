import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/ProductItem.scss';
//import manzana from '@products/01-apple.svg';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.urlImage} alt={product.nombre} />
			<div className="product-info">
				<div>
					<p>$ {product.precio}</p>
					<p>{product.nombre}</p>
				</div>
				<figure onClick={()=> handleClick(product)}>
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	)
}

export default ProductItem;
