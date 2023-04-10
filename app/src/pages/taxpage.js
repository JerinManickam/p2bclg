import React, { useEffect, useState } from "react";
import styles from "../styles/taxpage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import DBOp from "../db/dbservices";

const Taxpage=()=>{
        
    const [users,setUsers]= useState(null)
    const [taxType,setTaxType]= useState(null)
    const [tax,setTaxes]= useState(null)
    const [userId,setUserId]= useState(null)
    const [taxTypeId,settaxTypeId]= useState(null)
    const [amount,setAmount]= useState(0)

    useEffect(()=>{
      
        let dataUser = DBOp.getUser();
        let taxtypes = DBOp.getTaxType();
        let taxId = localStorage.getItem("taxid");
        if(taxId){
            settaxTypeId(parseInt(taxId));
        }
       
        dataUser.once(data=>{
           
            setUsers(data?JSON.parse(data.userStr):[])

            console.log(users)
        })

        taxtypes.once(data=>{
           
            setTaxType(data?JSON.parse(data.taxType):[])

            console.log(taxType)
        })

        
    },[])

    let taxes = DBOp.getTaxes();
    const submitTaxes=()=>{
        let date = new Date().getDate();
         let month = new Date().getMonth();
         let Year = new Date ().getFullYear();
        taxes.once(data=>{
            if(data){
                let temptax=JSON.parse(data.taxes);
                temptax = [
                    ...temptax,
                    {
                        id:(temptax.length+1),
                        type:taxTypeId,
                        amount:amount,
                        userid:userId,
                        data:date+"/"+ month+ '/'+ Year,
                    }
                ]

                DBOp.putTax(temptax);

                alert("Tax List Added");
                
                
            }
        })

    }


    return(
        <main className={styles.bgimg}>
            <div className={styles.overlay}>
            <div className="flex justify-between items-center pt-10 w-full px-5">
            <h2 className="text-2xl  ">Tax Page</h2>
            <Link to="/incomeprofile">
                <FontAwesomeIcon icon={faCircleArrowLeft} className="text-2xl "/>
                </Link>
            </div>
            
            {/* {
                tax.map(data=>{
                    return (<p>{data.name}</p>)
                })
            } */}

            {/*Select User*/}
            <label for="user" className={styles.selhead}>Select the User :</label>
            <div className="px-5">
            <select id="user" className={styles.selection} onChange={
                (e)=>{
                    setUserId(parseInt( e.target.value?e.target.value:0))
                }
            }>
               <option >Select option</option>
               {/* <option value="Jesus">Jesus</option>
               <option value="Amma">Amma</option>
               <option value="Herman">Herman</option>
               <option value="Jerin">Jesus</option>
               <option value="Nick">Jesus</option> */}
               {
                users? users.map(user=>{
                    return(
                        <option value={user.id}>{user.name}</option>
                    )
                }):""
               }
            </select>
            </div>

            {/*Tax type*/}
            <label for="user" className={styles.selhead}>Tax type :</label>
            <div className="px-5">
            <select id="user" className={styles.selection} value={taxTypeId} onChange={
                (e)=>{
                    settaxTypeId(parseInt( e.target.value?e.target.value:0))
                }
            }>   
               <option >Tax type</option>
               {/* <option value="Festival Tax">Festival Tax</option>
               <option value="Road Tax">Road Tax</option>
               <option value="Water Tax">Water Tax</option>
               <option value="Village Tax">Village Tax</option>
               <option value="Year Tax">Year Tax</option> */}
               {
                taxType? Object.keys(taxType).map(key=>{
                    return(
                        <option value={key}>{taxType[key]}</option>
                    )
                }):""
               }
            </select>
            </div>

            <div className="px-5">
            <input type="number" className={styles.inputs} placeholder="Amount Rs" min='0' onChange={
(e)=>{
                    setAmount(parseInt( e.target.value?e.target.value:0))
                }
            }/>
            <button type="submit" onClick={submitTaxes} className={styles.btn}>Submit</button>
            </div>

            </div>
        </main>
    )
}
export default Taxpage