import './Status.css';
import drone from '../assets/graphics/drone.svg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAllItemsFromCart } from '../actions/shoppingCartActions';
import { useDispatch } from 'react-redux';


function Status() {

    const [orderString, setOrderString] = useState("");
    const [captionString, setCaptionString] = useState("Lägger order...");
    const [etaString, setEtaString] = useState("");

    const shoppingCart = useSelector((state) => { return state.shoppingCart });
    const dispatch = useDispatch();

    function clearShoppingCart() {
        dispatch(clearAllItemsFromCart());
    }

    useEffect(() => {
        async function postOrder() {
            const response = await fetch('http://localhost:5000/api/beans', {
                method: 'POST',
                body: JSON.stringify({shoppingCart}) /* Passing our store to the API */
            });
            const data = await response.json();
            setOrderString("Ordernummer #" + data.orderNr);
            setCaptionString("Din beställning är på väg!");
            setEtaString(data.eta + " minuter");
        }
        
        if(shoppingCart.length == 0){
            setCaptionString("Nej du, gå tillbaka och lägg varor i korgen först!");
        } else {
            postOrder();
        }
        
    }, [])

    return (
        <div>
            <div className="container" >
                <h2>{orderString}</h2>
                <img src={drone} />
                <h1>{captionString}</h1>
                <h4>{etaString}</h4>
                <Link to="/menu" onClick={clearShoppingCart}><button ><h3>Ok, cool!</h3></button></Link>
            </div>
        </div>
    )
}

export default Status;

