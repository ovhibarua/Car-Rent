import React from 'react'
import Logo from './Logo'
import Image from './Image'

function Nav() {
    return (
        <nav className='p-10'>
            <div className='flex items-center gap-16'>
                <Logo />
                <div className='flex items-center border-[#C3D4E966] gap-5 border-[1px] px-5 py-2.5 rounded-full'>
                    <Image addImg="/src/assets/Icons/searchIcon.png" />
                    <div className='flex items-center'>
                        <input className='w-[490px]' type="search" name="search" id="search" placeholder='Search something here' />
                        <Image addImg="/src/assets/Icons/filter.png" />
                    </div>
                </div>
            </div>
            <div></div>
        </nav>
    )
}

export default Nav