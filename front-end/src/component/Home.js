/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../images/Designer-pana.png'
import Navbar from './nav/Navbar.js'
import MainBack from '../images/Designer-amico.png'
import './home.css'
const Home = () => {
    return (
        <div className='min-h-[100vh]   flex-1 items-center justify-center'   >
            <div className='h-14'><Navbar /></div>
                
                
            {/* <img src={MainBack} className=' w-[100vw] h-[80vh]  md:w-[40vw]' style={{position: "absolute", left: "50%", top: "50%", transform:"translate(-50%,-50%)" , zIndex:"0"}} ></img> */}
            <div className=' h-[60vh]  lg:h-[90vh] p-3  flex-1 justify-center items-center ' style={{ zIndex: "100" }}>
                <div className='container  ' style={{zIndex:"100", position:"relative", left:"50%", top:"50%", transform:"translate(-50%,-50%)"}}> 
                    <h1 className="text-center font-bold md:text-[3em] " style={{ zIndex: "100" }}> GALHOTRA <span className='opacity-30'>GROUP</span></h1>
                    <p className="text-center " >Embrace the season with our latest collection. Effortless style.  Timeless elegance.</p>
                    <div className='flex gap-4 mt-5 justify-center' >
                        <button className=' bg-gray-900 rounded-md px-5 py-2 font-semibold text-white ' >Contact</button>
                        <button className=' bg-gray-200 rounded-md px-5 py-2 font-semibold hover:bg-gray-300'  >See Jobs</button>
                    </div>
                </div>
            </div>
            <div className='min-h-[100vh] bg-gray-200   flex-1 items-center justify-center' >

            </div>
        </div>
    )
}

export default Home