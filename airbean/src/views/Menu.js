import './Menu.css';
import topFlower from '../assets/graphics/graphics-header.svg';
import bottomFlower from '../assets/graphics/graphics-footer.svg';
import { useState, useEffect } from 'react';
import Product from '../components/Product';
import MenuBoard from '../components/MenuBoard';
import CartButton from '../components/CartButton';
import { useSelector } from 'react-redux';

function Menu({link}) {

    const shoppingCart = useSelector((state) => { return state.shoppingCart });

    const [products, updateProducts] = useState([]);
    const [cartCount, updateCount] = useState(0);

    useEffect(() => {
        async function getMenu() {
            const response = await fetch('http://localhost:5000/api/beans');
            const data = await response.json();

            updateProducts(data.menu);
        }
        getMenu();
    }, [])

    useEffect(() => {
        getCartCount();
    }, [shoppingCart])

    
    function getCartCount() {
        let count = 0;
        let ids = Object.entries(shoppingCart).length

        for(let i = 0; i < ids; i++){
            count += shoppingCart[i].counter;
        }
        updateCount(count);
    }

    return (
        <div className="menu">
            <img className="topFlower" src={topFlower} />
            <CartButton link={link} count={cartCount}/>
            <h1>Meny</h1>
            
            <MenuBoard className="menuBoard" products={products}/>
            
            <img className="bottomFlower" src={bottomFlower} />
        </div>
    )
}

export default Menu;