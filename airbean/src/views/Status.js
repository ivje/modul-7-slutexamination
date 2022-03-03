import './Status.css';
import drone from '../assets/graphics/drone.svg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function Status() {

    const [orderString, setOrderString] = useState("");
    const [captionString, setCaptionString] = useState("Lägger order...");
    const [etaString, setEtaString] = useState("");

    const shoppingCart = useSelector((state) => { return state.shoppingCart });

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
        postOrder();
        
    }, [])

    return (
        <div>
            <div className="container" >
                <h2>{orderString}</h2>
                <img src={drone} />
                <h1>{captionString}</h1>
                <h4>{etaString}</h4>
                <button><h3>Ok, cool!</h3></button>
            </div>
        </div>
    )
}

export default Status;