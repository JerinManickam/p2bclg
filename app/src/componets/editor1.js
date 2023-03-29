import React from "react";
import '../styles/editor.css'
import {Link} from 'react-router-dom'
const Names =['Herman','Yenok','Jerin'];

const Editor1 =()=>{
    return(
        <section className="bgimg">
            <div className='overlay'>
            
            {/* wrapp-container */}
                <div className="mt-5 ">
                       {
                        Names.map(data=>{
                           return (
                            // <Link href='/selfprofile'>
                            <div className='box'>
                           <p className="pl-5 text-base">{data}</p>
                           </div>
                        //    </Link>
                           )
                        })
                       }

                      
                   
                </div>

            </div>
        </section>
    )
}

export default Editor1