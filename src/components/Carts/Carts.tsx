import {FC, useEffect, useState} from "react";
import {ICartModel} from "../../models/ICartModel";
import {getAllCarts} from "../../services/dummi.api.services";
import {Cart} from "./Cart";



const Carts:FC = () => {
    const [carts, setCarts] = useState<ICartModel[]>([])

    useEffect(() => {
        getAllCarts().then(({data:{carts}})=> {
            setCarts(carts);
        })
    }, []);

    return (
        <div>
            {
                carts.map(cart =><Cart key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

export {Carts};