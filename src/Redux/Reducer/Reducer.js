
const INTIAL_ADD = {
    data: [],
    productList: []
};
export const cartReducr = (state = INTIAL_ADD, action) => {
    switch (action.type) {
        case 'ADD_CART_DATA':
            return { ...state, data: action.payload };
        case "ADD_PRODUCT_LIST":
            return { ...state, productList: state.productList.concat(action.payload) };
        case 'REMOVE_PRODUCT_LIST':
            const first = state.productList.slice(0, action.payload)
            const second = state.productList.slice(action.payload + 1)
            return { ...state, productList: first.concat(second) };
        default:
            return INTIAL_ADD;
    }
}

