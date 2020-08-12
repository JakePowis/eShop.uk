import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {

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
            <a href="cart.html"> Cart</a>
            <a href="signin"> Sign In</a>
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

            <Route path="/products/:_id" component={ProductScreen} />
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
