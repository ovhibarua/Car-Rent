import Card from "./Card"
import CardData from "../../Data/CardLIst.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divide from "./Divide";
import Button from "../Button";



function CardLIst() {
    const settings = {
        infinite: true,
        autoplaySpeed: 2000,
        centerPadding: "32px",
        className: "center",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <section className="container mx-auto pb-16">
            <Divide divide={"Popular Car"} view={"View All"} />
            <div className="slider-container mb-11">
                <Slider  {...settings}>
                    {CardData.map((list, index) => <Card key={index} carName={list.cardTitle} type={list.cardText} cardImg={list.cardImg} gas={list.cardGas} handle={list.cardManual} people={list.cardPeople} price={list.cardPrice} />)}
                </Slider>
            </div>
            <Divide divide={"Recomendation Car"} />
            <div className="grid grid-cols-4 gap-8 mb-16">
                {CardData.map((list, index) => <Card key={index} carName={list.cardTitle} type={list.cardText} cardImg={list.cardImg} gas={list.cardGas} handle={list.cardManual} people={list.cardPeople} price={list.cardPrice} />)}
            </div>
            <div className="flex justify-center items-center">
                <Button button={"Show more car"} />
            </div>
        </section>
    )
}

export default CardLIst