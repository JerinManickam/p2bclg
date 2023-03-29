import React, { useEffect, useRef } from "react";
import '../styles/Selectuser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faUser,faBook,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
 const SelectUser=()=>{
 const bgclick= useRef();
const click =()=>{
  console.log(bgclick.current.id);
}

    return(
        <main className='bgimg'>
          <div className='overlay'>
      <div className="pt-16 px-6 flex justify-between items-center">
       <div className='w-24 h-24 bg-slate-100  rounded-full flex justify-center items-center' id='avather' 
            // style={{backgroundImage:`url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
            > <FontAwesomeIcon fontSize={30} icon={faUser}/> </div>
       <p className="text-3xl font-medium">Jesus</p>
      </div>
        <p className="text-right px-6 text-xl">Admin</p>

        <div className="grid grid-cols-4 m-2 gap-y-2.5 gap-x-2.5 justify-items-center mt-20">
         
          <Link to="/editor" className='grids'>
          <div ref={bgclick} id="click"  onClick={click} >
            <FontAwesomeIcon className="text-3xl" icon={faPen}/>
            <p className="pt-2">Editor</p>
          </div>
          </Link>

          <Link to="/listuser" className='grids'>
          <div >
            <FontAwesomeIcon className="text-3xl" icon={faUser}/>
            <p  className="pt-2">User</p>
          </div>
          </Link>

          <div  className='grids'>
            <FontAwesomeIcon className="text-3xl" icon={faBook}/>
            <p className="pt-2">Rules</p>
          </div>

          <Link to='/' className='grids' >
          <div >
            <FontAwesomeIcon className="text-3xl" icon={faRightFromBracket}/>
            <p className="pt-2">Logout</p>
          </div>
          </Link>
        </div>
        </div>
        </main>
    )
}
export default SelectUser