import { CART_ADD_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
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
        default:
            return state;
    }

}

export { cartReducer }