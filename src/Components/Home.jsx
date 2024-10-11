import React, { useState } from 'react'
import axios from 'axios';
function Home() {
    const [text,settext] =useState("");

    async function handleAddPost() {

        if(text === ""){
            alert("please add text");
            return;
        
        }
        const obj={
            title:text
        }

        try{
            const res = await axios.post("http://localhost:10000/addpost",obj)
            if(res.data.status){
                alert("post added")
            }

        }catch(e){
                console.log(e);
                
        }


        
    }

  return (
        <div>
            <input type="text" placeholder='add text' value={text} onChange={(e)=>settext(e.target.value)}></input>
            <button onClick={handleAddPost}>Add</button>
        </div>
  )
}

export default Home