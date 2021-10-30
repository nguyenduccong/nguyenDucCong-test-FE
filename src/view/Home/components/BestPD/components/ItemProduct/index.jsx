import React from 'react';

const ItemProduct = (props) => {
    // const data = props.data;

    return (
        <div className="box_square_products_item">
            <img src="../images/producticon-01.png"  alt="" className="rating" />
            <div className="imgage">
                <img src="../images/best-image-01.png"  alt="" />
            </div>
            <div className="boxGo">
                <div className="boxGo_text">
                    How to create
                    mobile-optimized
                </div>
                <a href="/" className="boxGo_icon">Go</a>
            </div>
        </div>
    );
}

export default ItemProduct;