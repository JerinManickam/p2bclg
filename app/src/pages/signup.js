import React,{useEffect, useRef, useState} from "react";
import styles from '../styles/Home.css'
import {Link} from 'react-router-dom'
import DBOp from "../db/dbservices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'




export default function Signup(){
    

const [users,setUsers]=useState(null); 
const [name,setName]=useState('');   
const [email,setEmail]= useState('');
const [pass,setPass]=useState('');
const [num,setNum] = useState('');
const [hono,setHono]=useState('');
const [street,setStreet]=useState('');
const [vlname,setVlname]=useState('');
const [img,setImg]=useState('');
const [time,setTime]=useState('');
const[date,setDate]=useState('');
const[role,setRole]=useState('');

useEffect(()=>{

  let dataUser = DBOp.getUser();
 
  dataUser.once(data=>{
     
      setUsers(data?JSON.parse(data.userStr):[])

      console.log(users)
  })

},[])

let newUser = DBOp.getUser();

const Signup =()=>{

//  if (email == "") {
//   alert('Please Enter the email')
//  }PasswordPassword
//   if (pass == '') {
//   alert("Please Enter the Password")
//  }
//   if(num == ''){
//   alert('Please Enter the Mobile Number')
//  }
 console.log("Email:"+email + " No:" + num +" Pass" + pass +' '+ img);
 var today = new Date();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  newUser.once(data=>{
    if(data){
      let temNewUser= JSON.parse(data.userStr);
      temNewUser =[
        ...temNewUser,
        {
        id:(temNewUser.lenth+1),
        name:name,
        email:email,
        passw:pass,
        mbno:num,
        hono:hono,
        street:street,
        vlname:vlname,
        img:img,
        time:time,
        date:today.getDate(),
        role: role,
        }
      ]
      DBOp.putNewUser(temNewUser);
      console.log(temNewUser);
      alert('Create account successfully');
    }
  })
}

    return (
      <>
        <main className='bgimg'>
          <div className='overlay'>
            <div className="flex justify-between items-center">
          <h2 className='heading'>Create <br/> Account</h2>
          <Link to='/selectuser'>
                <FontAwesomeIcon className="text-xl pr-7" icon={faArrowCircleLeft}/>
                </Link>
                </div>
          <from>
          <div className="flex justify-center items-center flex-col">

          <input className='inputs' placeholder="Name" type="text" required onChange={e=>setName(e.target.value)}/>
          <input className='inputs' placeholder="Email" type="email" required onChange={e=>setEmail(e.target.value)}/>
          <input className='inputs' placeholder="Password" type="password" required onChange={e=>setPass(e.target.value)} />
          <input className='inputs' placeholder="Confirm Password" required type="password"/>
          <input className='inputs' placeholder="Mobile Number" type="number" onChange={e=>setNum(e.target.value)}/>
          <input className='inputs' placeholder="Door No" type="text" onChange={e=>setHono(e.target.value)}/>
          <input className='inputs' placeholder="Street" type="text" onChange={e=>setStreet(e.target.value)}/>
          <input className='inputs' placeholder="Village Name" type="text" onChange={e=>setVlname(e.target.value)}/>
          {/* <input className='inputs' placeholder="Street" type="text" onChange={e=>setStreet(e.target.value)}/> */}
          {/* <input className='inputs' placeholder="Time" type="time" onChange={e=>setTime(e.target.value)}/> */}
          {/* <input className='inputs' placeholder="Date" type="date" onChange={e=>setDate(e.target.value)}/> */}
          {/* <input className='inputs' placeholder="Role" type="number" min="0" max="3" /> */}
          <select className='inputs' onChange={e=>setRole(e.target.value)}>
              <option>select role</option>
              <option value="0">Admin</option>
              <option value="1">Editor</option>
              <option value="2">User</option>
          </select>
          <div className="inputs h-auto p-4">
            <label className='text-left mt-6'>Profile Picture:</label> <input className='w-full px-5 py-3 mt-7' placeholder="Profile Photo" type="file" onChange={e=>setImg(e.target.files[0])}/>
          </div>
        </div>
          {/* flex -1*/}
         <div className='mx-10 mt-20 flex justify-between items-center'>
         <h3 className=' text-4xl font-bold '>Sign Up</h3>
         <Link to='#'>
         <button type="submit" onClick={Signup} className='btn  w-14 h-14 bg-black flex justify-center items-center rounded-full'><p className='text-white text-2xl'>&rarr;</p></button>
         </Link>
         </div>
         </from>
          {/* flex -2*/}
        
          <Link to="/" className='mx-10 mt-0 flex justify-between items-center'>
         <button className='underline underline-offset-1'>Sign in</button>
         </Link>
           
          </div>
        </main>
      </>)
}