import './OrderItem.css';
import upArrow from '../assets/graphics/arrow-up.svg';
import downArrow from '../assets/graphics/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { removeItemFromCart, addItemToCart} from "../actions/shoppingCartActions";

function OrderItem ({id, title, unitPrice, count}) {
   
    const dispatch = useDispatch();

    function addToCart(){
        dispatch(addItemToCart({id, title, unitPrice}));
    }

    function removeFromCart(){
        dispatch(removeItemFromCart(id));
    }
   
    return (

    <div className="cartItemRow"> 
        <div className="cartItemRowColumn1">
            <div className="cartItemRow1">
                <h2>{title}</h2>
                <div className="cartLine">&nbsp;</div>
            </div>
            <div className="cartItemRow2">{unitPrice * count} kr</div>
        </div> 
        <div className="cartItemRowColumn2">
            <img className="upArrow" src={upArrow} onClick={addToCart}/>
            <h6>{count}</h6>
            <img className="downArrow" src={downArrow} onClick={removeFromCart}/>
        </div>
    </div>

    )
}

export default OrderItem;