import Products from "./Products";
import Product from "./product";

const Shop = () => {
    return (
        <div className="ShoppingCart">
            <div className="shop">
                <h1> CapCleaners</h1>
            </div>
            <div className="Products"> 
            {Products.map ((product) => (
                <Product data = {product} />
            ))} </div>
        </div>
    );
}

export default Shop;