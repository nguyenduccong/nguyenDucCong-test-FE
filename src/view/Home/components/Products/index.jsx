import React from "react";

import ListProduct from '../../../../components/ListProducts';
import {ListProducts} from '../../../../data/listproducts.data'

const Products = () =>{

    return(
        <div className="section">
            <div className="boxProducts">
                <ListProduct data={ListProducts}></ListProduct>
                <div className="seeMore">See More</div>
            </div>
        </div>
    );
}

export default Products



