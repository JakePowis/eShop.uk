import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <div classNameName="grid-container">
      <header className="header">
        <div className="brand">
          <button className="burger" onClick={openMenu}>
            &#9776;
            </button>
          <a href="index.html">eShop.uk</a>
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
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="/images/fnaticshirt.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Fnatic 2019 Jersey</a>
                </div>
                <div className="product-brand">Fnatic - League of Legends</div>
                <div className="product-price">£60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="images/fnaticshirt.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Fnatic 2019 Jersey</a>
                </div>
                <div className="product-brand">Fnatic - League of Legends</div>
                <div className="product-price">£60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="images/fnaticshirt.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Fnatic 2019 Jersey</a>
                </div>
                <div className="product-brand">Fnatic - League of Legends</div>
                <div className="product-price">£60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="images/fnaticshirt.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Fnatic 2019 Jersey</a>
                </div>
                <div className="product-brand">Fnatic - League of Legends</div>
                <div className="product-price">£60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="images/fnaticshirt.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Fnatic 2019 Jersey</a>
                </div>
                <div className="product-brand">Fnatic - League of Legends</div>
                <div className="product-price">£60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="images/fnaticshirt.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Fnatic 2019 Jersey</a>
                </div>
                <div className="product-brand">Fnatic - League of Legends</div>
                <div className="product-price">£60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        All rights reserved - eShop.uk
</footer>

    </div>
  );
}

export default App;
