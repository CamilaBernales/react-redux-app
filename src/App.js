import React, { Fragment } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NuevoProducto from "./components/NuevoProducto";
import Producto from "./components/Producto";
import EditarProducto from "./components/EditarProducto";


//redux
import {Provider} from 'react-redux'
import store from './store'

function App() {

  return (
    <Router >
      <Provider store={store}>
      <Header />
      <div className="container mt-5">
      <Switch>
        <Route exact path="/" component={Producto} />
        <Route exact path="/producto/nuevo" component={NuevoProducto} />
        <Route exact path="/producto/editar/:id" component={EditarProducto} />

      </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
