import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from "../constants/cartConstants";
import { bindActionCreators } from "redux";

function cartReducer(state = { cartItems: [], shipping: {}, payment: {}  }, action) {
    console.log("hitting reducers 3", action, "state:", state)
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            //is product already in cart?
            const product = state.cartItems.find(x => x.product === item.product);
            //if yes, replace current item with new one
            if (product) {
                return {
                    cartItems:
                        state.cartItems.map(x => x.product === product.product ? item : x)
                };
                // if no, add it to cart as new item
            }
            return { cartItems: [...state.cartItems, item] };
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
        case CART_SAVE_SHIPPING:
                return { ...state, shipping: action.payload };
        case CART_SAVE_PAYMENT:
                return { ...state, payment: action.payload };
        default:
            return state;
    }

}

export { cartReducer }