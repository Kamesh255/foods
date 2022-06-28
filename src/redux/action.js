import { ADD_CART, DEC_ITEM, DELETE_CART, INC_ITEM, SHOW_DATA } from "./actionType";

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
export const incrementitem = (payload) => ({
    type: INC_ITEM,
    payload: payload,
  });
  export const decrementitem = (payload) => ({
    type: DEC_ITEM,
    payload: payload,
  });

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