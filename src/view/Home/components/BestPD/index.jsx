import React from 'react';
import ItemProduct from './components/ItemProduct/index';
import Slider from "react-slick";

import {bestProduct} from '../../../../data/bestProduct'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestPD = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <div className="section">
            <div className="BestPD">
                <div className="container">
                    <div className="section_title BestPD_section_title">
                        <div className="title BestPD_title">
                            Best Product
                        </div>

                        <div className="content BestPD_content">
                            How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first
                        </div>
                    </div>
                </div>

                <div className="box_square">
                    <div className="container">
                        <div className="box_square_products" >
                            <Slider {...settings}>
                                {bestProduct.map((item,idx)=>(
                                    <ItemProduct key={idx} data={item}></ItemProduct>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BestPD