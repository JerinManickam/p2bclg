import React from "react";
import '../styles/Selfprofile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faPhone,faLocationDot,faArrowCircleLeft,faIdCard } from '@fortawesome/free-solid-svg-icons'


const Details =[
    {
    icon:faPhone,
    detail:"+91 6369975517",
    },
    {
    icon:faUser,
    detail:"Jesus",
     },
     {
        icon:faIdCard,
        detail:" Admin",
         },
  
]

const SelfProfile =()=>{
    return(
        <main className='bgimg'>
          <div className='overlay'>
           
           {/* link */}
           <div className="flex justify-end mt-10 mr-5 text-xl"> <FontAwesomeIcon  icon={faArrowCircleLeft}/></div>
          
            {/* User Avather Logo */}
            <div className='pgqarter'>
            <FontAwesomeIcon icon={faUser} className='text-4xl bg-slate-200 p-8 rounded-full'/>
            {/* UserName */}
            <h2 className="text-3xl">Jesus</h2>
            <h4 className="text-xl">Developer</h4>
            </div>

            {/* Details-Container */}
            <div className='halfpg'> 
              {
                Details.map((detail)=>{
                    {/* Mobile-Number */}
                    return(
                        <div className='dtcon'>
                        <FontAwesomeIcon icon={detail.icon} className='detsize'/>
                        <h2 className='detsize'> {detail.detail}</h2>
                    </div>
                    )
                })
              }
            </div>
          </div>
        </main>
    )
}
export default SelfProfile