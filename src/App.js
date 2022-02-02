import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Auth from './routes/auth/auth';
import Shop from './routes/shop/Shop';
import AuthSecurity from './routes/auth/AuthSecurity';
import Products from './routes/products/Products';


function App() {

  return (
    <>
        <Switch>
            <Route path="/" exact component={Auth} />
            <AuthSecurity path="/shop" component={Shop} />
            <AuthSecurity path="/products" component={Products} />
        </Switch>
      </>
  );
}

export default App;
