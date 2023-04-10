import DB from "./gundb";
// import {useNavigate} from 'react-router-dom'
const db = DB;
let users ;
const DBOp = {
    initDB:(data)=>{
        db.get("first").once(data=>{
            
            if(data&&data.first){

            } else {
                db.get("first").put({first:true})
                db.get("user").put({userStr:JSON.stringify(data.user)},(ack)=>{
                    console.log(ack)
                })
                db.get("taxtype").put({taxType:JSON.stringify(data.taxtype)},(ack)=>{
                    console.log(ack)
                })
                db.get("tax").put({taxes:JSON.stringify(data.tax)},(ack)=>{
                    console.log(ack)
                })
                db.get('newuser').put({newUser:JSON.stringify(data.newuser)},(ack)=>{
                    console.log(ack);
                })
            }
        })
        
       
    },

    //Read Data
    getUser: ()=>{

        return db.get("user");
        
    },
    getTaxType: ()=>{

        return db.get('taxtype');

    },
    getTaxes: ()=>{

        return db.get('tax');

    },

 
    //-----------------------
    //Put Data (update data)
    putTax:(payload)=>{
        db.get("tax").put({taxes:JSON.stringify(payload)},(ack)=>{
            console.log(ack)
        })
    },

    putNewUser:(payload)=>{
        db.get('user').put({userStr:JSON.stringify(payload)},(ack)=>{
            console.log(ack);
        })
    },
    
}

export default DBOp; 