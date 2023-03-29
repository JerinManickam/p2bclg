import Gun from 'gun';



const DB = Gun({
    peers:["http://localhost:8000/gun"]
});

export default DB;