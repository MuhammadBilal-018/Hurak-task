import React from 'react'
import headerBg from '../../assets/header_bg.png'
import HomeImg from '../../assets/home.png'
import Banner from '../banner/Banner'
import Testimonials from '../testimonials/Testimonials'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom'

export const Header = () => {

return (
<>
    <div>
        {/* Main Header */}
        <div class=" w-auto h-[708px] relative bg-contain bg-no-repeat" style={{ backgroundImage: `url(${headerBg})` }}>

            <nav class="pt-5">
                <div class="flex relative bg-header-bg w-[1080px] mx-auto justify-between items-center">
                    <div class="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center">
                        A
                    </div>
                    <ul class="flex space-x-6">
                        <li class="text-lightGray py-7 font-semibold text-white">
                            <Link to="/">Our Company</Link>
                        </li>
                        <li class="text-lightGray py-7 font-semibold text-white">
                            <Link to="/banner">Our Experts</Link>
                        </li>
                        <li class="text-lightGray py-7 font-semibold text-white">
                            <Link to="/testimonials">Our Values</Link>
                        </li>
                        <li class="text-lightGray py-7 font-semibold text-white">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li class="text-lightGray py-7 font-semibold text-white">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </li>
                    </ul>

                </div>
            </nav>

            <section>
                <div class="w-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto">
                    <div class="space-y-8">
                        {/* Heading */}
                        <h1 class="font-mullish font-bold text-[40px] text-white leading-[1.2] gap-4">
                            Expert advice for discerning buyers
                        </h1>
                        {/* Paragraph */}
                        <p class="font-mullish text-[18px] text-white opacity-70">
                            Our consultants and research analysts work together
                            to provide understanding and clarity through the
                            intricacies of an ever changing real estate cycle.
                        </p>
                        {/* Button */}
                        <button class="flex flex-row items-center bg-white text-blue-600  rounded-md font-mullish font-bold py-[14px] px-[18px]
                                    hover:bg-lightBlue500 transition-all duration-200">Learn more
                            <svg viewBox="0 0 24 24" focusable="false" class="w-[14px] h-[14px] ml-3">
                                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                            </svg></button>
                    </div>
                    {/* Image */}
                    <div>
                        <img src={HomeImg} alt="Header Background" class="max-w-[750px]" />
                    </div>
                </div>
            </section>
        </div>
    </div>
    <Banner />
    <Contact />
    <Testimonials />
</>
)
}
export default Header