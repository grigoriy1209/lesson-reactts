import {FC, useEffect, useState} from "react";
import {ICartModel} from "../../models/ICartModel";
import {getAllCarts} from "../../services/dummi.api.services";



const Carts:FC = () => {
    const [carts, setCarts] = useState<ICartModel[]>([])

    useEffect(() => {
        getAllCarts().then(({data:{carts}})=> {
            console.log(carts);
        })
    }, []);

    return (
        <div>
            Carts
        </div>
    );
};

export {Carts};