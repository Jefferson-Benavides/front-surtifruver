import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';
import crearProducto from '../forms/crearProducto';
import tableProductos from '../tables/tableProductos';
import CrearProducto from '../forms/crearProducto';
import VerFacturaDetalle from "../forms/VerFacturaDetalles";
import tableFacturas from '../tables/tableFacturas';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/password-recovery" component={PasswordRecovery} />
						<Route exact path="/send-email" component={SendEmail} />
						<Route exact path="/new-password" component={NewPassword} />
						<Route exact path="/account" component={MyAccount} />
						<Route exact path="/signup" component={CreateAccount} />
						<Route exact path="/checkout" component={Checkout} />
						<Route exact path="/orders" component={Orders} />
						<Route exact path="/nuevo-producto" component={CrearProducto} />
						<Route exact path="/admin/productos" component={tableProductos} />
						<Route exact path="/admin/producto/detalles/:id" component={CrearProducto} />
						<Route exact path="/admin/facturas" component={tableFacturas} />
						<Route exact path="/admin/factura/detalles/:id" component={VerFacturaDetalle} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
