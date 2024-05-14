import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/bg.jpg"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`, backdropFilter: 'blur(25px)'}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
        </div>
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Prachi</h1>
        <p className='text-white py-4 max-w-lg '>I am a versatile professional with a wide range of skills in technology . As a Web developer, I am proficient in building web applications.I am always eager to learn and expand my skills, which is why I stay up-to-date with the latest trends and technologies in my field.</p>
        <a href="https://drive.google.com/file/d/1rYm--8anaL7Oo2bUWmrLpnId8gVR2VVJ/view?usp=sharing" className='inline-block'>
  <button className='text-white text-2xl'>
    Resume <i className="fa-solid fa-arrow-right text-lg p-[2px]"></i>
  </button>
</a>
      </div>
      <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo1} alt="" />
    
      </div>
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
     
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header