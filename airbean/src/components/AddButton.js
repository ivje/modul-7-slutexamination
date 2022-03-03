import './AddButton.css';
import addBtn from '../assets/graphics/add.svg';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../actions/shoppingCartActions";


function AddButton({id, title, price}) {
    const dispatch = useDispatch();

    function addToCart(){
        dispatch(addItemToCart({id, title, price}));
    }
    return (
        <div className="addCircle" onClick={addToCart}>
            <span className="innerCircle"></span>
            <img className="plusSign" src={addBtn}/>
        </div>
    )
}

export default AddButton;