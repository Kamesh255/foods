import { ADD_CART, DELETE_CART, SHOW_DATA } from "./actionType";

export const showData = (payload) => ({
    type: SHOW_DATA,
    payload: payload
})
export const addCart = (payload) => ({
    type: ADD_CART,
    payload: payload
})
export const deleteCart = (payload) => ({
    type: DELETE_CART,
    payload: payload

})

let url = "https://flip-product-data.herokuapp.com/data";

export const showFood = async (dispatch) => {
    try {
        const req = await fetch(url);
        const res = await req.json();
        dispatch(showData(res))
    } catch (e) {
        console.log(e)
    }
}