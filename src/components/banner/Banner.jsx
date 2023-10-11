import React from 'react'
import  './banner.css'
import HomeBackgroundImage1 from '../../assets/bg_2.png'
import HomeBackgroundImage2 from '../../assets/bg_1.png'
import ExcellentIcon from '../../assets/excellent_reputation.png'
import ExcellentService from '../../assets/excellent_service.png'
import ExperiencedTeam from '../../assets/experienced_team.png'
import NationalFootprint from '../../assets/national_footprint.png'

const Banner = () => {
return (
<>
    <div>
        {/* Background Images */}
        <div className="w-full h-[1600px] relative bottom-0 bg-contain bg-no-repeat -z-10"
            style={{ backgroundImage: `url(${HomeBackgroundImage1})` }}>
            <img src={HomeBackgroundImage2} alt="Foreground"
                className="absolute top-[10px] right-[80px] w-[1080px] h-[900px] z-10" />
            <div className="  pt-[100px] flex justify-center items-center z-50 text-center">
                <h1 className=" w-[500px] text-black opacity-70 text-4xl font-bold">
                    Why Arda <br />Real Estate
                    Consulting?
                </h1>
            </div>
            {/* Card */}
                <div class="w-[1000px] mx-auto flex flex-wrap justify-center gap-4">
                <div className="w-[450px] h-[500px] z-50 bg-white rounded-lg p-12">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="w-[120px] h-[100px]">
                                    <img src={ExcellentIcon} alt="" />
                                </div>
                                <div className="text-9xl font-bold text-gray-100">01</div>
                                {/* Text Content */}
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl pt-7 pb-7">Excellent reputation.</h1>
                                <p className="text-gray-400 font-semibold leading-[30px]">
                                    The Arda Real Estate Consulting reputation among investors was formed by our
                                    Research group and has been reinforced by our Consulting team by providing well
                                    thought-out, unbiased commendations and advice.
                                </p>
                            </div>
                        </div>
                    </div>

                    

                    <div className="w-[450px] h-[500px] z-50 bg-white rounded-lg p-12">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="w-[100px] h-[100px]">
                                    <img src={ExperiencedTeam} alt="" />
                                </div>
                                <div className="text-9xl font-bold text-gray-100">02</div>
                                {/* Text Content */}
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl pt-7 pb-7">Excellent reputation.</h1>
                                <p className="text-gray-400 font-semibold leading-[30px]">
                                    The Arda Real Estate Consulting reputation among investors was formed by our
                                    Research group and has been reinforced by our Consulting team by providing well
                                    thought-out, unbiased commendations and advice.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[450px] h-[500px] z-50 bg-white rounded-lg p-12">
                        <div className="flex flex-col ">
                            <div className="flex flex-row justify-between">
                                <div className="w-[120px] h-[100px]">
                                    <img src={NationalFootprint} alt="" />
                                </div>
                                <div className="text-9xl font-bold text-gray-100">03</div>
                                {/* Text Content */}
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl pt-7 pb-7">Excellent reputation.</h1>
                                <p className="text-gray-400 font-semibold leading-[30px]">
                                    The Arda Real Estate Consulting reputation among investors was formed by our
                                    Research group and has been reinforced by our Consulting team by providing well
                                    thought-out, unbiased commendations and advice.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[450px] h-[500px] z-50 bg-white rounded-lg p-12">
                        <div className="flex flex-col ">
                            <div className="flex flex-row justify-between">
                                <div className="w-[120px] h-[100px]">
                                    <img src={ExcellentService} alt="" />
                                </div>
                                <div className="text-9xl font-bold text-gray-100">04</div>
                                {/* Text Content */}
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl pt-7 pb-7">Excellent reputation.</h1>
                                <p className="text-gray-400 font-semibold leading-[30px]">
                                    The Arda Real Estate Consulting reputation among investors was formed by our
                                    Research group and has been reinforced by our Consulting team by providing well
                                    thought-out, unbiased commendations and advice.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button class="flex flex-row items-center bg-white text-blue-600  rounded-md font-mullish font-bold py-[14px] px-[18px]
                                    hover:bg-lightBlue500 transition-all duration-200">Learn more
                            <svg viewBox="0 0 24 24" focusable="false" class="w-[14px] h-[14px] ml-3">
                                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                            </svg></button>
                </div>
            </div>
        </div>

</>
)
}

export default Banner