import React, { useRef } from "react";
import  '../styles/Incomeprofile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved,faChartLine,faChevronRight,faLocationDot,faBell,faArrowRightFromBracket,faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const TaxDetail=[
    {
        icon:faFireFlameCurved,
        taxname:"Festival Tax",
        links:"/taxpage"
        // touch:()=>{
        //    let touch =document.querySelector('#touch');
        //    touch.className = `${styles.touch} ${styles.taxbox}`;
        //    setTimeout(()=>{touch.className = `${styles.taxbox}`},150)
        // }
    },
    {
        icon:faFireFlameCurved,
        taxname:"Water Tax",
        links:"/"
    },
    {
        icon:faFireFlameCurved,
        taxname:"Festival Tax",
        links:"/"
    },
    {
        icon:faFireFlameCurved,
        taxname:"Festival Tax",
        links:"/"
    },
];

const ThreeObject =[
    {
        icon:faChartLine,
        name:"Activity",
        riarrow:faChevronRight,
        link:'/invoice'
    },
    {
        icon:faLocationDot,
        name:"Locaton",
        riarrow:faChevronRight,
        link:'/'
    },
    {
        icon:faBell,
        name:"Notification",
        riarrow:faChevronRight,
        link:'/'
    },
    {
        icon:faArrowRightFromBracket,
        name:"Logout",
        riarrow:faChevronRight,
        link:'/'
    },
    
]


const IncomProfile=()=>{
    
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
            <h2 className="text-3xl font-bold">Profile</h2>
           <Link to='/listuser'> 
           <FontAwesomeIcon className="text-xl" icon={faCircleArrowLeft}/>
           </Link>
           </section>

            {/* Avather-Name */}
            <section className='iconbox'>
                <div className='imgavthar' style={{background:`url('https://t3.ftcdn.net/jpg/03/37/38/86/360_F_337388655_XX9BKW77OEi92NIftLUx4AczcxuYxLXK.jpg') center center`,backgroundSize:"cover"}}></div>
                <h3 className="text-xl font-medium">Jesus</h3>
            </section>

            {/* Tax box -container */}
            <section className="grid grid-cols-4 gap-2 px-5 mt-5">
                {TaxDetail.map((details=>{
                        return(
                            <Link to={details.links} className="col-span-2">
                            <div  onClick={details.touch}>
                            <div className='taxbox' ref={touchref} id='touch'>
                                <FontAwesomeIcon icon={details.icon} className="text-3xl mb-5"/>
                                <h2>{details.taxname}</h2>
                            </div>
                            </div>
                             </Link>
                        )
                }))}
            </section>

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