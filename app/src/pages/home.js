import '../styles/Home.css'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
//Redux fetchData
import {useSelector} from 'react-redux'
//GunDb
// import {insertInitialVal} from './features/dbcontext'


const Home = ()=>{
const user = useSelector(state=>state.user.value);

//Login Event 
//  const btn = useRef()
//  const router = useRouter();
const navigate = useNavigate();
 const login =()=>{
  
   if(email == user.email && pass == user.passw){
    navigate('/selectuser')
   }
   else{
  console.log("Incorrect Email or Password");
   }
 }


 const dbInit= ()=>{
   
    const userData= [
      {
        id:1,
        name:'Daniel',
        email:'adivtech@gmail.com',
        passw:'1234',
        mbno:6369975517,
        hono:'85/4',
        street:'West Street',
        vlname:'Adaikalapuram',
        img:'https://i.pinimg.com/550x/d8/ed/3e/d8ed3e8048041ac4f08ba5ec8e3d354f.jpg',
        time:'10.00PM',
        date:'12-02-23',
        role: 0,
      },
      {
        id:2,
        name:'Santhose',
        email:'santhose@gmail.com',
        passw:'1234',
        mbno:8369975519,
        hono:'55/4',
        street:'Noth Street',
        vlname:'Adaikalapuram',
        img:'https://wallpaperaccess.com/full/8505753.jpg',
        time:'11.00PM',
        date:'13-02-23',
        role: 1,
      }
    ];
    // insertInitialVal(JSON.stringify(userData));
  }
  
  var data={
  user:[
    {
      id:1,
      name:"Daniel",
      email:"adivtech@gmail.com",
      pwd:"1234",
      mbno:+916369975517,
      hono:85/4,
      street:"West Street",
      vlname:"Adaikalapuram",
      img:"",
      time:"10.00PM",
      date:"",
      role: 0,
    }
  ],
  role:{
    0:"Admin",
    1:"Commitee",
    2:"subscriber"
  },
  tax:[{
    id:1,
    type:0,
    amount:700,
    userid:1
  },],
  taxtable:[
    {
      id:1,
      name: "Festival tax",
      amount: 1000
    },
    {
      id:2,
      name: "Road tax",
      amount: 500
    },
  ],
  }
  useEffect(()=>{
    // dbInit();
  },[]);
  
  const [email,setEmail]= useState('');
  const [pass,setPass]= useState('');
    return(
        <>

        <main className="bgimg">
          <div className="overlay">
          <h2 className='heading'>Welcome <br/> Back</h2>
          <div className='mt-20 flex justify-center items-center flex-col '>
          <input input="user" className="inputs" placeholder="Email" type="email"  value={email} onChange={e=>setEmail(e.target.value)}/>
          <input className="inputs" placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)}/>
          </div>
          {/* flex -1*/} 
         <div className='mx-10 mt-32 flex justify-between items-center'>
         <h3 className=' text-4xl font-bold '>Sign in</h3>
         
         
         {/* <Link to='/selectuser'> */}
         <div onClick={login} className='cursor-pointer btn  w-14 h-14 bg-black flex justify-center items-center rounded-full'><p className='text-white text-2xl'>&rarr;</p></div>
         {/* </Link> */}
  
  
         </div>
  
          {/* flex -2*/}
          <div className='mx-10 mt-10 flex justify-between items-center'>
          
          
          <Link to="/signup">
            <h3 className='underline underline-offset-1'>Sign up</h3>
             </Link>
  
  
         <h3 className='underline underline-offset-1'>Forget Password</h3>
         </div>
  
          </div>
        </main>
        </>
    )
}

export default Home