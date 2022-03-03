import { Link } from 'react-router-dom';
import './OrderSummary.css';
import TotalSum from './TotalSum';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

function OrderSummary() {
    let totalSum = 0;

    const shoppingCart = useSelector((state) => { return state.shoppingCart });

    
    
    return (
        <div className="card">
            <div className="arrow"></div>
            <h5>Din beställning</h5>
            <div className="cartItems">
            {
                Object.values(shoppingCart).map((product) => {
                    totalSum += (product.price * product.counter);
                    return <OrderItem id={product.id} title={product.title} unitPrice={product.price} count={product.counter}/>
                })
            }
            </div>
            <div class="totalus">
                <TotalSum sum={totalSum}/>
            </div>
            <Link to="/status"><button className="tmmButton"><h3>Take my money!</h3></button></Link>
        </div>
    )
}

export default OrderSummary;