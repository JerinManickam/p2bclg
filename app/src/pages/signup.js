import React,{useRef} from "react";
import styles from '../styles/Home.css'
import {Link} from 'react-router-dom'

export default function Signup(){
    const btn = useRef()
    const click =()=>{
      if(btn.current.classList[0]=='btn'){
        btn.current.classList.add('click')
      }
      // setTimeout(()=>{btn.current.classList.remove('click')},1000)
    }
    return (
      <>
        <main className='bgimg'>
          <div className='overlay'>
          <h2 className='heading'>Create <br/> Account</h2>

          <div className="flex justify-center items-center flex-col">
          <input className='inputs' placeholder="Email" type="email"/>
          <input className='inputs' placeholder="Password" type="password"/>
          <input className='inputs' placeholder="Confirm Password" type="password"/>
          <input className='inputs' placeholder="Mobile Number" type="number"/>
          </div>
          {/* flex -1*/}
         <div className='mx-10 mt-20 flex justify-between items-center'>
         <h3 className=' text-4xl font-bold '>Sign Up</h3>
         <Link to='/'>
         <div onClick={click} ref={btn}  className='btn  w-14 h-14 bg-black flex justify-center items-center rounded-full'><p className='text-white text-2xl'>&rarr;</p></div>
         </Link>
        
         </div>
  
          {/* flex -2*/}
        
          <Link to="/" className='mx-10 mt-0 flex justify-between items-center'>
         <h3 className='underline underline-offset-1'>Sign in</h3>
         </Link>
           
          </div>
        </main>
      </>)
}