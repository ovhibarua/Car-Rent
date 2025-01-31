import React from 'react'
import Button from '../Button'
import Image from '../Image';

function HeroCard(pros) {
    const { heroTitle, heroText, cardImg } = pros;
    return (
        <div className='rounded-xl p-6 bg1 h-[360px] mx-4 relative'>
            <h1 className='w-72 mb-4 paraWhite'>{heroTitle}</h1>
            <p className='mb-5 w-72 paraWhite'>{heroText}</p>
            <Button button="Rental Car" />
            <div className='absolute bottom-3 left-48'>
                <Image addImg={cardImg} />
            </div>
        </div>
    )
}

export default HeroCard