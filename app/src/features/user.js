import {createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name:'user',
    initialState:{value: {
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
      }
    },
//     initialState:{value: {
//       id:1,
//       name:'Daniel',
//       email:'useradivtech@gmail.com',
//       passw:'1234',
//       mbno:6369975517,
//       hono:'85/4',
//       street:'West Street',
//       vlname:'Adaikalapuram',
//       img:'https://i.pinimg.com/550x/d8/ed/3e/d8ed3e8048041ac4f08ba5ec8e3d354f.jpg',
//       time:'10.00PM',
//       date:'12-02-23',
//       role: 0,
//     }
//   },
//   initialState:{value: {
//     id:1,
//     name:'Daniel',
//     email:'editeradivtech@gmail.com',
//     passw:'1234',
//     mbno:6369975517,
//     hono:'85/4',
//     street:'West Street',
//     vlname:'Adaikalapuram',
//     img:'https://i.pinimg.com/550x/d8/ed/3e/d8ed3e8048041ac4f08ba5ec8e3d354f.jpg',
//     time:'10.00PM',
//     date:'12-02-23',
//     role: 0,
//   }
// },
//       reducers:{
//         login:(state,action)=>{
//             state.value = action.payload
//         }
//       }
})

export default userSlice.reducer