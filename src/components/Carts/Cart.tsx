import {FC} from "react";
import {ICartModel} from "../../models/ICartModel";
import {IProductModel} from "../../models/IProductModel";

type IProps={item:ICartModel, getProductsFromCart:(productsFromCart:IProductModel[])=>void}



const Cart:FC<IProps> = ({item, getProductsFromCart}) => {

    const onclickHandlerCallback=()=>{
         getProductsFromCart(item.products)
    }
    return (
        <div>
            cart#- {item.id}. Total - {item.total}
            <button onClick={onclickHandlerCallback}>details</button>
        </div>
    );
};

export {Cart};