import Menu from "./Menu";
import './Cart.css';
import OrderSummary from "../components/OrderSummary";

function Cart() {

    return (
        <div>
            <Menu link="menu"/>
            <div className="overlay"></div>
            <OrderSummary />
        </div>
        
    )
}

export default Cart;