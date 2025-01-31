import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroCard from './HeroCard';
import Data from '../../Data/heroData.json'

function HeroBanner() {
    const settings = {
        infinite: true,
        speed: 4000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    console.log(Data)
    return (
        <div className="slider-container p-8">
            <Slider {...settings}>
                {Data.map((items, index) => <HeroCard key={index} heroTitle={items.title} heroText={items.text} cardImg={items.img} />)}
            </Slider>
        </div>
    )
}

export default HeroBanner

