import './Product.css';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';


function Product({id, title, price, description}) {
    


    return (
        <div className="itemRow"> 
            <div className="itemAddBtn"><AddButton id={id} title={title} price={price}/></div>
            <div className="itemRowColumn">
                <div className="row1">
                    <h2>{title}</h2>
                    <div className="cartLine">&nbsp;</div>
                    <h2>{price} kr</h2>
                </div>
                <div className="row2">{description}</div>
            </div> 
        </div>
      
    )
}

export default Product;