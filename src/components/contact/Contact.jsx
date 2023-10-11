import React from 'react'
import footorBg from '../../assets/footer_bg.png'
import Map from '../../assets/map.jpg'
const Contact = () => {
return (
<>
<div className="  flex justify-center items-center z-50 text-center py-9">
                <h1 className=" w-[500px] text-black opacity-70 text-4xl font-bold">
                    Why Arda <br />Real Estate
                    Consulting?
                </h1>
            </div>
  <div className="w-5/6 mx-auto bg-headerBg bg-cover bg-center h-[650px] rounded-xl"
    style={{ backgroundImage: `url(${footorBg})` }}>
    <div className="flex flex-row ">
      {/*
      <!-- Left Div --> */}
      <div className="flex-1/2 pl-24 pt-0 flex flex-col  mt-20 justify-center">
        {/*
        <!-- Heading --> */}
        <div class="w-[250px]">
          <h1 className="text-3xl font-bold text-white">Let us hear your thoughts</h1>
        </div>


        {/*
        <!-- Paragraph --> */}

        <p className="text-white opacity-50 mt-4">If you have any questions about our consulting services, <br /> please
          contact us.</p>

        {/*
        <!-- Form --> */}
        <form className="mt-4  ">
          <div className="main-section flex flex-row">

          <div className="left-section">

          <div className="mb-4">
            <label className=" text-white block text-lg font-semibold" htmlFor="full-name">
              Full Name
            </label>
            <input type="text" id="full-name" className="w-full p-6 border border-gray-400 rounded-l-lg  rounded-r-lg rounded-tr-none  focus:outline-none"
              placeholder="How we should call you?" />
          </div>
          <div className="mb-4">
            <label className="text-white block text-lg font-semibold" htmlFor="email">
              Email Address
            </label>
            <input type="email" id="email"
              className="w-full p-6 border border-gray-400 rounded-l-lg  rounded-r-lg rounded-tr-none  focus:outline-none"
              placeholder="Enter a valid email address" />
          </div>
          </div>
<div className="right-section ">

          <div className="mb-4 px-10">
            <label className="text-white block text-lg font-semibold" htmlFor="message">
              Your Message
            </label>
            <textarea id="message" rows="6" cols="35" className="w-full p-6 border border-gray-400 rounded-l-lg  rounded-r-lg rounded-tr-none  focus:outline-none"
              placeholder="Tell us more about your projects"></textarea>
          </div>
</div>
          </div>
          <div className="button-form flex justify-end pr-9">
          <button className="bg-blue-500  text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>        
          </div>
    
        </form>

      </div>

      {/*
      <!-- Right Div --> */}
      <div className="flex-1/3 flex justify-center  items-center relative">
        <div className="absolute left-40 top-20 w-[450px] h-[450px] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${Map})` }}></div>
      </div>
    </div>
  </div>

</>
)
}

export default Contact