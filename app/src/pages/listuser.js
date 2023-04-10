import React, { useEffect, useState ,useContext} from "react";
import '../styles/listuser.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import DBOp from '../db/dbservices'
import Gun from 'gun'

// const gun = Gun();
const UserDetail =[
    {
        avimg:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=300",
        usname:"Jesus",
        time:"10.00 PM"
    },
    {
        avimg:"https://img.freepik.com/premium-vector/cartoon-illustration-cute-jesus-character_339032-1022.jpg?w=2000",
        usname:"Herman",
        time:"11.00 PM"
    },
    {
        avimg:"https://wallpaperaccess.com/full/8505753.jpg",
        usname:"Jerin",
        time:"12.00 PM"
    },
    {
        avimg:"https://cdn.wallpapersafari.com/86/48/5yBUAq.jpg",
        usname:"Yenok",
        time:"01.00 AM"
    },
    {
        avimg:"https://www.shutterstock.com/image-vector/jesus-christ-design-hugging-sheep-260nw-1798865554.jpg",
        usname:"Mancy",
        time:"02.00 AM"
    },
    {
        avimg:"https://img.freepik.com/free-vector/hand-drawn-kawaii-jesus-illustration_23-2149941610.jpg",
        usname:"Nick",
        time:"03.00 AM"
    },
    {
        avimg:"https://img.freepik.com/premium-vector/jesus-with-open-arms_627328-6.jpg",
        usname:"Karan",
        time:"04.00 AM"
    },
    {
        avimg:"https://img.freepik.com/premium-vector/hand-drawn-kawaii-jesus-illustration_23-2149962511.jpg",
        usname:"Clares",
        time:"05.00 AM"
    },
]



const ListUser = ()=>{

    const [users,setUsers]= useState(null)

    useEffect(()=>{
      
        let dataUser = DBOp.getUser();
       
        dataUser.once(data=>{
           
            setUsers(data?JSON.parse(data.userStr):[])

            console.log(users)
        })
        
    },[])

    return(
       
        <>
        
        <main className='bgimg'>
            <div className='overlay'>
                <div className="flex justify-between items-center px-5">
                <h2 className="text-3xl font-bold mb-10 mt-10">User List</h2>
                <Link to='/selectuser'>
                <FontAwesomeIcon className="text-xl" icon={faArrowCircleLeft}/>
                </Link>
                </div>
            
           
                {
                    users?users.map(details=>{
                        return( 
                    <Link to="#">
                    <section className='avcontainer'>
                    <div  id='avimg' style={{background:`url(${details.img}) center center`,backgroundSize:"cover",}}></div>
                    <h3 className="col-span-2 text-2xl font-medium">{details.name}</h3>
                    <p className="text-gray-500 text-sm">{details.time}</p>
                    </section>
                     </Link>
                        )
                    }):"No Users Found !"
                }
        </div>
        </main>
        </>
      

    )
}
export default ListUser