import Product from "./Product";
import './MenuBoard.css';

function MenuBoard({products}) {
    return (
        <div className="menuBoard">
            <ul>
        {
            Object.values(products).map((product) => {
                return <Product id={product.id} title={product.title} price={product.price} description={product.desc}/>
            })
            
        }
        </ul>
        </div>
        )
}
    


export default MenuBoard;