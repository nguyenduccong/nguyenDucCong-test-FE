import React from 'react';

const ItemProduct = (props) => {
    const data = props.data;

    return (
        <div className="box_square_products_item">
            <img src="../images/producticon-01.png" srcset="../images/producticon-01@2x.png 2x,../images/producticon-01@3x.png 3x" alt="" className="rating" />
            <div className="imgage">
                <img src="../images/best-image-01.png" srcSet="../images/best-image-01@2x.png 2x,../images/best-image-01@3x.png 3x" alt="" />
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