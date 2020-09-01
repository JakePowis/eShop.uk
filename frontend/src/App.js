import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen'
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen'
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import { listProducts } from './actions/productActions'
import WelcomeScreen from './screens/WelcomeScreen';

function App(props) {

  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  console.log("cat is ", category)



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

          <div class="">
            <form class="searchBar" onSubmit={submitHandler}>
              <select class="searchCat" onChange={(e) => setCategory(e.target.value)}>
                <option value="">All</option>
                <option value="lol">Legue of Legends</option>
                <option value="csgo">Counter Strike</option>
              </select>
              <input
                class="searchText"
                name="searchKeyword"
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              {/* <Link to="/shop"> */}
              <button class="searchButton" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
              {/* </Link> */}
            </form>
          </div>


          <div className="header-links">
            <Link to="/cart"><i style={{ fontSize: "2.5rem" }} class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="items">{cartItems.length}</span> <span >Basket</span></Link>
            {userInfo ? (
              <Link to="/profile"><i></i>Hello, {userInfo.name.split(" ")[0]}</Link>
            ) : (
                <Link to="/signin">Sign In</Link>
              )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <aside className="sidebar">

          <div class="welcome">
            <i class="fa fa-user" aria-hidden="true"></i>
            {userInfo ? (
              <Link to="/profile"><i></i>Hello, {userInfo.name.split(" ")[0]}</Link>
            ) : (
                <Link to="/signin">Sign In</Link>
              )}

          </div>
          <h3>Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul className="categories">
            <li>
              <Link to="/category/lol">League of Legends</Link>
            </li>

            <li>
              <Link to="/category/csgo">Counter Strike: GO</Link>
            </li>
          </ul>

          <h3>Sale</h3>
          <ul className="categories">
            <li>
              <Link to="/sale">Sale Items</Link>
            </li>
          </ul>


          <h3>Account</h3>

          <ul className="categories">
            <li>
              <Link to="/customerservice">Customer Services</Link>
            </li>

            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signout">Sign Out</Link>
            </li>
          </ul>



        </aside>





        <main className="main">
          <div className="content">
            <Route path="/signin" component={SignInScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:_id" component={ProductScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/cart/:_id?" component={CartScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:_id" component={OrderScreen} />
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/shop" component={HomeScreen} />
            <Route path="/" exact={true} component={WelcomeScreen} />

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
