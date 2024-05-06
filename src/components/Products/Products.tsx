import {FC} from "react";
import {IProductModel} from "../../models/IProductModel";
import {Product} from "./Product";

interface IProps{
    item:IProductModel[]
}

const Products:FC<IProps> = ({item:productsId}) => {
    return (
        <div>
            {
                productsId.map((id:IProductModel)=><Product  id={id}/>)
            }
        </div>
    );
};

export {Products};