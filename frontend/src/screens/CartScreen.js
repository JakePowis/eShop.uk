import React, { useEffect } from 'react'
import { addToCart } from '../actions/cartActions'
import { useSelector, useDispatch } from 'react-redux';

export default function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    console.log("broswer cart is", cart)

    const { cartItems } = cart;

    console.log("cart is", cart)

    const dispatch = useDispatch();

    const productId = props.match.params._id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

    useEffect(() => {
        console.log("running cart use effect")
        if (productId) {
            console.log("running cart use effect 2")
            dispatch(addToCart(productId, qty))
        }
    }, [])


    return (
        <div>
            Cart Screen
            {cart.cartItems.map(x => <li>{x.name}, {x.qty}</li>)}
        </div>
    )
}
