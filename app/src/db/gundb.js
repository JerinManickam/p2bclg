import Gun from 'gun';



const DB = Gun({
    peers:["http://localhost:8000/gun","https://p2pserver.onrender.com/gun"]
});

export default DB;