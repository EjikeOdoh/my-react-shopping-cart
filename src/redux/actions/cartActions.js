import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'


export const addToCart (id) => async (dispatch, getState) => {
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data.id,
            title: data.title,
            description: data.description,
            price: data.price,
            image: data.image
        }
    });

    localStorage.setItem('msc', JSON.stringify(getState().cart.cartItems));
}


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

    localStorage.setItem('msc', JSON.stringify(getState().cart.cartItems))
}