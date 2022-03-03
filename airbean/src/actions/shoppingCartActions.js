export const addItemToCart = ({id, title, price}) => {
    return {
        type: 'ADD_NEW_ITEM',
        payload: {id, title, price}
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export const clearAllItemsFromCart = () => {
    return {
        type: 'CLEAR_ALL'
    }
}
