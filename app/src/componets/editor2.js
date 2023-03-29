import React from "react";
import '../styles/editor.css'
const Names = [
  
    "Jesus",
    "Jerin",
    "Herman",
    "Nick",
    "Karan"
]


const Editor2 =()=>{
    return(
        <section className='bgimg'>
            <div className='overlay'>
            
            {/* wrapp-container */}
                <div className="mt-5 ">
                       {
                        Names.map(data=>{
                           return (
                            <div className='box'>
                           <p className="pl-5 text-base">{data}</p>
                           </div>
                           )
                        })
                       }
                   
                </div>

            </div>
        </section>
    )
}

export default Editor2