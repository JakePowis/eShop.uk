import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,
    PRODUCT_SAVE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
} from '../constants/productConstants';
import axios from 'axios';

//load all products in DB
const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
};

//load product that matches the product ID only
const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId })
        const { data } = await axios.get("/api/products/" + productId)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
};

const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });

        //get user info including token to send to back end
        const { userSignin: { userInfo } } = getState();

        //check if product is new or already exisits in DB (if it has an id, we know it exisits as its selected from mapped list from DB)
        if (!product._id) {
            const { data } = await axios.post('/api/products', product, { headers: { Authorization: 'Bearer ' + userInfo.token }, });
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await axios.put('/api/products/' + product._id, product, { headers: { Authorization: 'Bearer ' + userInfo.token }, });
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
}

const deleteProduct = (productId) => async (dispatch, getState) => {
    try {
        const { userSignin: { userInfo }, } = getState();
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
        const { data } = await axios.delete('/api/products/' + productId, {
            headers: { Authorization: 'Bearer ' + userInfo.token },
        });
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
};

export {
    listProducts,
    detailsProduct,
    saveProduct,
    deleteProduct
};
