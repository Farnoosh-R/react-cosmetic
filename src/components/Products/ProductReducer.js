import React from "react";

const ProductReducer = (state, action) => {

switch (action.type) {
    case 'ADD_TO_CARD':
        return{
            ...state,
            added: true
        }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                added: false
            }

    default:
        break;
}

}
export default ProductReducer;