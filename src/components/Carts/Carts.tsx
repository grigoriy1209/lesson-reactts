import {FC, useEffect, useState} from "react";
import {ICartModel} from "../../models/ICartModel";
import {getAllCarts} from "../../services/dummi.api.services";
import {Cart} from "./Cart";
import {IProductModel} from "../../models/IProductModel";

interface IProps {
    getProductsFromCart:(products:IProductModel[])=>void
}

const Carts:FC<IProps> = ({getProductsFromCart}) => {
    const [carts, setCarts] = useState<ICartModel[]>([])

    useEffect(() => {
        // @ts-ignore
        getAllCarts().then(({data:{carts}})=> {
           setCarts(carts);
        })
    }, []);

    return (
        <div>
            {
                carts
                    .map
                          (value => (
                              <Cart
                                    key={value.id}
                                    getProductsFromCart={getProductsFromCart}
                                     item={value}/>
                              )
                          )
            }
        </div>
    );
};

export {Carts};