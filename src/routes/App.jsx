import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';
import tableUsuarios from '../tables/tableUsuarios';
import CrearUsuario from '../forms/CrearUsuario';
import CrearProducto from '../forms/CrearProducto';
import CrearFactura from '../forms/CrearFactura';
import tableProductos from '../tables/tableProductos';
import tableFacturas from '../tables/tableFacturas';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/orders" component={Orders} />
						<Route exact path="/nuevo-producto" component={CrearProducto} />
						<Route exact path="/nuevo-usuario" component={CrearUsuario} />
						<Route exact path="/nuevo-factura" component={CrearFactura} />
						<Route exact path="/admin/productos" component={tableProductos} />
						<Route exact path="/admin/usuarios" component={tableUsuarios} />
						<Route exact path="/admin/facturas" component={tableFacturas} />
						<Route exact path="/admin/productos/detalles/:id" component={CrearProducto} />
						<Route exact path="/admin/usuarios/detalles/:id" component={CrearUsuario} />
						<Route exact path="/admin/facturas/detalles/:id" component={CrearFactura} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
