import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let addedItem = state.find(item => item.product.id === action.payload.product.id)
            if (addedItem) {
                let newState = state.map(item => {
                    if (item.product.id === action.item.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
                    }
                    return item;
                })

                return newState
            } else {
                return [...state, { ...action.payload }]
            }




        default:
            return state;
    }

}