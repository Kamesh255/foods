import { ADD_CART, DELETE_CART, SHOW_DATA } from "./actionType";

const initState = {
    data: [],
    cart: []
}

export const reducer = (store = initState, { type, payload }) => {
    switch (type) {
        case SHOW_DATA:
            return { ...store, data: payload };
        case ADD_CART:
            let newArray = [];
            let uniqueObj = {};
            for (let i in store.cart) {
                let objId = store.cart[i]['id'];
                uniqueObj[objId] = store.cart[i]
            }
            if (uniqueObj[payload.id] === undefined) {
                uniqueObj[payload.id] = payload;
                uniqueObj[payload.id]["quantity"] = 1;
            } else {
                let quan = uniqueObj[payload.id]["quantity"];
                uniqueObj[payload.id]["quantity"] = quan + 1;
            }
            // Loop to push unique object into array
            for (let i in uniqueObj) {
                newArray.push(uniqueObj[i]);
            }
            return { ...store, cart: newArray };
        case DELETE_CART:
            var dcart = store.cart.filter((e) => {
                if (e.id !== payload) {
                    return e;
                }
            });
            return { ...store, cart: [...dcart] };
        default:
            return store;
    }
}