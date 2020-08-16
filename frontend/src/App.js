import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen'
import ProductsScreen from './screens/ProductsScreen';

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>

      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="burger" onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">eShop.uk</Link>
          </div>
          <div className="header-links">
            <Link to="/cart">Cart</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
                <Link to="/signin">Sign In</Link>
              )}
          </div>
        </header>

        <aside className="sidebar">
          <h3>shopping category</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>League of Legends</li>
            <li>CS GO</li>
          </ul>
        </aside>


        <main className="main">
          <div className="content">
            <Route path="/signin" component={SignInScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:_id" component={ProductScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/cart/:_id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>

        <footer className="footer">
          All rights reserved - eShop.uk
        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;
