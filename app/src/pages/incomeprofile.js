import React, { useEffect, useRef,useState } from "react";
import  '../styles/Incomeprofile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved,faChartLine,faChevronRight,faLocationDot,faBell,faArrowRightFromBracket,faCircleArrowLeft,faWater,faBolt,faHouse,faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom';


const TaxDetail=[
    {
        icon:faBolt,
        taxname:"Electricity Tax",
        id:"2"
    },
    
    {
        icon:faWater,
        taxname:"Water Tax",
        id:"1"
    },
    {
        icon:faChampagneGlasses,
        taxname:"Festival Tax",
        id:"0"
    },{
        icon:faHouse,
        taxname:"Land Tax",
        id:"3"
        // touch:()=>{
        //    let touch =document.querySelector('#touch');
        //    touch.className = `${styles.touch} ${styles.taxbox}`;
        //    setTimeout(()=>{touch.className = `${styles.taxbox}`},150)
        // }
    },
  
];

const ThreeObject =[
    {
        icon:faChartLine,
        name:"Statistics",
        riarrow:faChevronRight,
        link:'/invoice'
    },
    {
        icon:faArrowRightFromBracket,
        name:"Logout",
        riarrow:faChevronRight,
        link:'/'
    },
    
]


const IncomProfile=()=>{


const [currentUser,setCurrentUser] = useState()
const [isAdmin,setisAdmin] = useState()
const [isEditor,setisEditor] = useState()
const [isUser,setisUser] = useState()
let userLoggedIn;
const navigate = useNavigate();

// let isAdmin = false;
// let isEditor = false;
// let isUser = false;
let role =["Admin","Editor","User"]
useEffect(()=>{
  let user=localStorage.getItem("loggedInUser");
  if(user){
    userLoggedIn = JSON.parse(user);
    setCurrentUser(userLoggedIn)
    switch(parseInt(userLoggedIn.role)){
      case 0:
        setisAdmin(true)
        break;
      case 1:
        setisEditor(true)
        break;
      case 2:
        setisUser(true)
        break;
      default:
        setisUser(true);
        break;
    }
  }
},[])

const onClickTax=(taxid)=>{
    
    localStorage.setItem("taxid",taxid);
    if(taxid)
        navigate("/taxpage")
}
    
    const touchref = useRef();
    const Touch = ()=>{
      
   if(touchref.current.id == "touch"){
    touchref.current.style.backgroundColor="red"
   }
   else{

   }
   console.log(touchref.current);
    }

    return(
        // Bg-img
        <main className='bgimg'>
           {/*Overlay Blur*/}
            <div className='overlay'>
            {/* Heading */}
           <section className="flex items-center justify-between mt-10 mx-5">
            <h2 className="text-3xl font-bold">Pay</h2>
           <Link to='/selectuser'> 
           <FontAwesomeIcon className="text-xl" icon={faCircleArrowLeft}/>
           </Link>
           </section>

            {/* Avather-Name */}
            <section className='iconbox'>
                <div className='imgavthar' style={{background:`url('https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg') center center`,backgroundSize:"cover"}}></div>
                <h3 className="text-xl font-medium">{currentUser? currentUser.name:""}</h3>
            </section>

            {/* Tax box -container */}
            {isAdmin || isEditor ?
            <section className="grid grid-cols-4 gap-2 px-5 mt-5">
                {TaxDetail.map((details=>{
                        return(
                            <a onClick={()=>onClickTax(details.id)} className="col-span-2">
                            <div >
                            <div className='taxbox' ref={touchref} id='touch'>
                                <FontAwesomeIcon icon={details.icon} className="text-3xl mb-5"/>
                                <h2>{details.taxname}</h2>
                            </div>
                            </div>
                             </a>
                        )
                }))}
            </section>:""
                }

                {/* Three object box */}
                <section className="px-5">

                    {
                        ThreeObject.map(details=>{
                            return(
                                <Link to={details.link}>
                                <div className='thbox'>
                                <div className="flex items-center justify-between px-7">
                                <FontAwesomeIcon icon={details.icon} className='text-3xl'/>
                                <h3 className="text-lg">{details.name}</h3>
                                <FontAwesomeIcon icon={details.riarrow} className='text-3xl'/>
                                </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                   
                </section>
            </div>

        </main>
    )
}

export default IncomProfile