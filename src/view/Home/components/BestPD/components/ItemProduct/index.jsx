import React from 'react';

const ItemProduct = (props) => {
    const data = props.data;

    return (
        <div className="box_square_products_item">
            <img src={`../images/${data.imgRating}`}  alt="" className="rating" />
            <div className="imgage">
                <img src={`../images/${data.imgProduct}`}  alt="" />
            </div>
            <div className="boxGo">
                <div className="boxGo_text">
                    {data.name}
                </div>
                <a href={`${data.path}`} className="boxGo_icon">Go</a>
            </div>
        </div>
    );
}

export default ItemProduct;