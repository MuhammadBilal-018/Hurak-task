import React from 'react'
import FooterImage from '../../assets/footer_bg.png'
import './footer.css'
const Footor = () => {
return (
<>
<div className="container">
  <footer style={{ backgroundImage: `url(${FooterImage})` }} className="w-full h-[850px] relative overflow-hidden">
    <div className="footer-division divide-y  divide-gray-400">
      <div className="w-full footor-content flex flex-row absolute bottom-24 justify-around">
        <div className="footor-left">
          <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center">
            A
          </div>
        </div>
        <div className="footer-right flex flex-row pl-8">
          <div className="pl-8">
            <h2 className="font-semibold pb-6 text-white">Our Company</h2>
            <ul className="text-white">
              <li><a href="#">Our Company</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">Consulting</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="pl-8">
            <h2 className="font-semibold pb-6 text-white">Our Experts</h2>
            <ul className="text-white">
              <li><a href="#">Team</a></li>
              <li><a href="#">Coverage</a></li>
            </ul>
          </div>
          <div className="pl-8">
            <h2 className="font-semibold pb-6 text-white">Our Values</h2>
            <ul className="text-white">
              <li><a href="#">Proprietary Tools</a></li>
              <li><a href="#">Forecasting</a></li>
              <li><a href="#">Surveys</a></li>
              <li><a href="#">Surban</a></li>
              <li><a href="#">Demographics</a></li>
              <li><a href="#">DesignLens</a></li>
            </ul>
          </div>
          <div className="pl-8">
            <h2 className="font-semibold pb-6 text-white">Contact</h2>
            <ul className="text-white">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Office Locations</a></li>
              <li><a href="#">Newsletter Sign-Up</a></li>
              <li><a href="#">Social Media</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-legacy flex flex-row absolute w-full bottom-6 py-8">
        <div className="legacy absolute flex flex-col justify-around text-white">
          <span>Arda Real Estate Consulting</span>
          <span>Copyright 2018</span>
        </div>
        <div className='icons absolute w-full flex justify-end'>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-blue-500 rounded-full p-2 bg-white">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 rounded-full p-2 bg-white">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 rounded-full p-2 bg-white">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

    {/* <div className="container">

        <footer style={{ backgroundImage: `url(${FooterImage})` }}
            className="w-full h-[850px] relative overflow-hidden">
            <div className="footer-division divide-y divide-solid">
                <div className=" w-full footor-content flex flex-row absolute bottom-24 justify-around">
                    <div className="footor-left">
                        <div class="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center">
                            A
                        </div>
                    </div>
                    <div className="footer-right flex flex-row pl-8">
                        <div className='pl-8'>
                            <h2 className="font-semibold pb-6 text-white">Our Company</h2>
                            <ul className='text-white'>
                                <li><a href="#">Our Company</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Research</a></li>
                                <li><a href="#">Consulting</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className='pl-8'>
                            <h2 className="font-semibold pb-6 text-white">Our Experts</h2>
                            <ul className='text-white'>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Coverage</a></li>
                            </ul>
                        </div>
                        <div className='pl-8'>
                            <h2 className="font-semibold pb-6 text-white">Our Values</h2>
                            <ul className='text-white'>
                                <li><a href="#">Proprietary Tools</a></li>
                                <li><a href="#">Forecasting</a></li>
                                <li><a href="#">Surveys</a></li>
                                <li><a href="#">Surban</a></li>
                                <li><a href="#">Demographics</a></li>
                                <li><a href="#">DesignLens</a></li>
                            </ul>
                        </div>
                        <div className='pl-8'>
                            <h2 className="font-semibold pb-6 text-white">Contact</h2>
                            <ul className='text-white'>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Office Locations</a></li>
                                <li><a href="#">Newsletter Sign-Up</a></li>
                                <li><a href="#">Social Media</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-legacy flex flex-row absolute w-full bottom-6 py-10">
                    <div className="legacy absolute flex flex-col  justify-around text-white">
                        
                            <span>Arda Real Estate Consulting </span>
                       
                        
                            <span>Copyright 2018</span>
                        
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-blue-500 rounded-full p-2 bg-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-500 rounded-full p-2 bg-white">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-500 rounded-full p-2 bg-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    </div> */}
</>
)
}

export default Footor