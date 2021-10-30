import React from "react";

import ItemProduct from "../ItemProduct/index"

const ListProduct = (props) => {
    return (
        <div className="container">
            <div className="listProducts">
                {props.data.map((item,index)=>(
                     <ItemProduct key={index} data={item} ></ItemProduct>
                ))}
            </div>
        </div>
    );
}

export default ListProduct