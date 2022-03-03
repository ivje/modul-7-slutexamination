const initalState = {
    shoppingCart: []
}

const shoppingCartReducer = (state = initalState, action) => {
    let idx = 0;

    switch(action.type) {
        case 'ADD_NEW_ITEM':
            idx = state.shoppingCart.findIndex(item => item.id === action.payload.id);

            if(idx < 0){ // Adding new item
                return {
                    ...state,
                    shoppingCart: [...state.shoppingCart, {"id": action.payload.id, "title": action.payload.title, "price": action.payload.price, "counter": 1}]
                }
            } else if (idx >= 0){ // Adding to existing item
                state.shoppingCart[idx].counter += 1;
                return {
                    ...state,
                    shoppingCart: [...state.shoppingCart]
                }
            } else {
                return state;
            }
        case 'REMOVE_ITEM':
            idx = state.shoppingCart.findIndex(item => item.id === action.payload);

            if(idx < 0){ // Item not found
                return state;
            } else if (idx >= 0){
                if(state.shoppingCart[idx].counter > 1){ // If two or more, remove one
                    state.shoppingCart[idx].counter -= 1;
                } else { // One item left, remove altogether
                    state.shoppingCart.splice(idx, 1);
                }
                return {
                    ...state,
                    shoppingCart: [...state.shoppingCart]
                }
                
            } else {
                return state;
            }

    default:
        return state;    
    }
    
}

export default shoppingCartReducer;