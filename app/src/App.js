import {  Routes,Route } from 'react-router-dom';
import Editor from './pages/editor';
import Home from './pages/home';
import IncomProfile from './pages/incomeprofile';
import Invoice from './pages/invoice';
import ListUser from './pages/listuser';
import SelectUser from './pages/selectuser';
import SelfProfile from './pages/selfprofile';
import Signup from './pages/signup';
import Taxpage from './pages/taxpage';

import DBOp from './db/dbservices'
import { useEffect } from 'react';


function App() {
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


  var data={
    user:[
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
        time:'10.00AM',
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
        img:'https://img.freepik.com/premium-vector/cartoon-illustration-cute-jesus-character_339032-1022.jpg?w=2000',
        time:'11.00AM',
        date:'13-02-23',
        role: 1,
      },
      {
        id:3,
        name:'Jerin',
        email:'jerin@gmail.com',
        passw:'1234',
        mbno:8469975517,
        hono:'55/4',
        street:'West Street',
        vlname:'Adaikalapuram',
        img:'https://wallpaperaccess.com/full/8505753.jpg',
        time:'12.00PM',
        date:'13-02-23',
        role: 2,
      },
    ],
    role:{
      0:"Admin",
      1:"Commitee",
      2:"subscriber"
    },
    taxtype:{
      0:'Festival Tax',
      1:'Water Tax',
      2:'Electricity Tax',
      3:'Land Tax'
    },
    tax:[
        {
        id:1,
        type:0,
        amount:700,
        userid:1,
        data:"21/02/23"
      },
    ],
    // taxtable:[
    //   {
    //     id:1,
    //     name: "Festival tax",
    //     data:'21/03/23',
    //     amount: 1000
    //   },
    //   {
    //     id:2,
    //     name: "Road tax",
    //     data:'22/03/23',
    //     amount: 500
    //   },
    // ],
  }



  useEffect(
    ()=>{
       
      
      // DBOp.initDB(data);

    },[]
  )
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='editor' element={<Editor/>}/>
        <Route path='incomeprofile' element={<IncomProfile/>}/>
        <Route path='invoice' element={<Invoice/>}/>
        <Route path='listuser' element={<ListUser/>}/>
        <Route path='selectuser' element={<SelectUser/>}/>
        <Route path='selfprofile' element={<SelfProfile/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='taxpage' element={<Taxpage/>}/>
     </Routes>
      </>
      );
}
export default App;
