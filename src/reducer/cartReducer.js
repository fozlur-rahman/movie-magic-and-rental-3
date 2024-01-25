// cartReducer.js
export const initialState = {
    cartData: [],
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart":
            return { cartData: [...state.cartData, action.payload] };

        case "removeFromCart":
            return {
                ...state,
                cartData: state.cartData.filter(
                    (item) => item.id !== action.payload
                ),
            };

        default:
            return state;
    }
};
