import {Carts} from "./components/Carts/Carts";
import {IProductModel} from "./models/IProductModel";
import {Products} from "./components/Products/Products";
import {useState} from "react";

const App = () => {
    const [products, setProducts] = useState<IProductModel[]>([])
    const getProductsFromCart=(products:IProductModel[]) =>{
        setProducts(products);

    }

    return (
        <div>
            <Carts getProductsFromCart={getProductsFromCart}/>
            <Products item={products}/>
        </div>
    );
};

export {App};