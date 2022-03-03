import cartIcon from '../assets/graphics/bag.svg';
import './CartButton.css';
import { Link } from 'react-router-dom';

function CartButton({link, count}) {
    let linkstr = "/" + link;

    return (
        
        <Link to={linkstr}>
        <div>
                <span className="circle">
                    

                </span>
                <img className="bag" src={cartIcon}/>
                <span className="innerCircle"></span>
                <h4 className="counter">{count}</h4>
                
        </div>
        </Link>
    )
}

export default CartButton;