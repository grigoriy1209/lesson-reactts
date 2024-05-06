import {FC, useEffect, useState} from "react";
import {IProductModel} from "../../models/IProductModel";
import {getProductById} from "../../services/dummi.api.services";
import {FullProductModel} from "../../models/FullProductModel";

interface IProps{
    id:IProductModel;
}

const Product:FC<IProps> = ({id:{id}}) => {

    const [product, setProduct] = useState<FullProductModel | null>(null)

    useEffect(() => {
        getProductById(id)
            .then((value) =>{
               setProduct(value.data)
                })
    }, [id]);
    return (
        <div>
            {
                product &&<div>{product.title}</div>
            }
        </div>
    );
};

export {Product};