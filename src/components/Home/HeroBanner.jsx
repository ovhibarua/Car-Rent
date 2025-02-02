import HeroCard from './HeroCard';
import Data from '../../Data/heroData.json'

function HeroBanner() {
    return (
        <header className="slider-container px-8 pt-8 flex gap-8">
            {Data.map((items, index) => <HeroCard key={index} heroTitle={items.title} heroText={items.text} cardImg={items.img} />)}
        </header>
    )
}

export default HeroBanner

