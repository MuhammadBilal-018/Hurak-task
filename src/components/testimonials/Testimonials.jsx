import React from 'react'
import User1 from '../../../src/assets/user_1.jpg'
import User2 from '../../../src/assets/user_2.jpg'
const Testimonials = () => {
return (
// Main Div
<div>
    <div className="  pt-[70px] flex justify-center items-center z-50 text-center">
        <h1 className=" w-[500px] text-black opacity-70 text-4xl font-bold">
            Clients Testimonals.
        </h1>
    </div>
    <div className='flex flex-row space-x-5 justify-center mt-24'>
    <div className="right-arrow flex justify-center items-center">
            <div
                className='w-16 h-16 border-2 opacity-75 border-blue-500 rounded-full flex items-center justify-center p-3'>
                <i className="fa-solid fa-arrow-left text-blue-500 text-xl"></i>
            </div>
        </div>
        <div className='flex flex-col items-start space-y-6 w-[480px] bg-white rounded-lg p-12 shadow-md'>
            <div>
                <img src={User1} class="rounded-full w-16 " alt="User 1" />
            </div>
            <div>
                <p className='font-semibold text-gray-400 '>
                    "My experience with Arda Real Estate Consulting has enabled me to better assess the current
                    market risk level at any point in the home building cycle. Also, I have been able to make
                    new valuable contacts."
                </p>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-blue-500'>Benrns Sturaro</span>
                <span className='font-bold'>NY</span>
            </div>
        </div>
        <div className='flex flex-col items-start space-y-6 w-[480px] bg-white rounded-lg p-12 shadow-md'>
            <div>
                <img src={User2} class="rounded-full w-16 " alt="User 1" />
            </div>
            <div>
                <p className='font-semibold text-gray-400 '>
                    "Arda Real Estate Consulting has provided our company with sound, insightful, and timely consulting
                    in a number of real estate-related areas. Specofully, reports and analysis for credit reporting
                    agencies, company valuation studies, and presentations to foreign investors have been areas where
                    they have excelled."
                </p>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-blue-500'>Benrns Sturaro</span>
                <span className='font-bold'>NY</span>
            </div>
        </div>
        <div className="right-arrow flex justify-center items-center">
            <div
                className='w-16 h-16 border-2 opacity-75 border-blue-500 rounded-full flex items-center justify-center p-3'>
                <i className="fa-solid fa-arrow-right text-blue-500 text-xl"></i>
            </div>
        </div>



    </div>
</div>

)
}

export default Testimonials