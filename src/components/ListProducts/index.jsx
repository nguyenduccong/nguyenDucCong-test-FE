import React from "react";

import ItemProduct from "../ItemProduct/index"

const ListProduct = (props) => {
    console.log(props.data);
    return (
        <div className="container">
            <div className="listProducts">
                {props.data.map(item =>(
                     <ItemProduct data={item} ></ItemProduct>
                ))}
            </div>
        </div>
    );
}

export default ListProduct