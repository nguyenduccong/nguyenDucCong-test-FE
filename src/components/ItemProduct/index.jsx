import React from "react";

const ItemProduct = (props) => {
    console.log(props.data);
    return (
        <div className="listProducts_item">
            <div className="listProducts_item_img">
                <img src={`../images/${props.data.img}.png`} alt="" />
            </div>
            <h2 className="text_item">
                {props.data.name}
            </h2>
            <div className="box_price">
                <div className="price">{props.data.price}</div>
                <div className="like">
                <img src="../images/hearticon.png" srcSet="../images/hearticon@2x.png,../images/hearticon@3x.png 3x" alt="" className="introduction_img" />
                    <span>{props.data.like}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct