import React from 'react'
import Logo from './Logo'

function Footer() {
    return (
        <footer className='bg-white px-8 pt-20 pb-14'>
            <div className='border-b-[1px] border-[#13131329] pb-9 flex justify-between mb-9'>
                <div>
                    <div className='mb-4'>
                        <Logo />
                    </div>
                    <p className='paraGray'>Our vision is to provide convenience <br /> and help increase your sales business.</p>
                </div>
                <div className='flex items-center gap-14 mr-14'>
                    <div>
                        <h2 className='paraDark mb-6'>About</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>How it works</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Featured</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Partnership</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Bussiness Relation</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='paraDark mb-6'>Community</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Community</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Blog</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Podcast</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Invite a friend</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='paraDark mb-6'>Socials</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Discord</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Instagram</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Twitter</li>
                            <li className='text-[#13131399] hover:cursor-pointer hover:text-[#3563E9]'>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <p className='paraDark'>©2022 MORENT. All rights reserved</p>
                <div className='flex gap-14'>
                    <p className='paraDark'>Privacy & Policy</p>
                    <p className='paraDark'>Terms & Condition</p>
                </div>
            </div>


        </footer>
    )
}

export default Footer;