import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    console.log("broswer cart returned from reducers is", cart)

    const { cartItems } = cart;

    console.log("cart is", cart)

    const dispatch = useDispatch();

    //get product id from the params (that match _id from app.js router), broken up by question mark (/cart/_id?qty=5)
    const productId = props.match.params._id;
    //get the qty from params by spliting the string and taking the right side
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

    console.log("type", typeof (qty))

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }


    //add the params id & quantity to cart on load
    useEffect(() => {
        props.setShopScreen(false)
        if (productId) {
            dispatch(addToCart(productId, qty))


        }
    }, [])

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h1>Shopping Cart</h1>
                    <div>Price</div>
                </li>
                {
                    cartItems.length === 0 ?
                        <div>Cart is empty</div>
                        :
                        cartItems.map(item =>
                            <li>
                                <div className="cart-image">
                                    <img src={item.image} alt="product" />
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/" + item.product}>
                                            {item.name}
                                        </Link>

                                    </div>
                                    <div>
                                        Qty:
                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                            {[...Array(item.countInStock).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                        <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >Delete</button>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    £{item.price}
                                </div>
                            </li>
                        )
                }
            </ul>

        </div>
        <div className="cart-action">
            <h3>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items):
                £{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h3>
            <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                Proceed to Checkout
      </button>

        </div>


    </div>
}
