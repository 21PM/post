import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")


    const navigate = useNavigate()

    async function handleSubmit(e){
            e.preventDefault()

            if(!email || !name || !password) {
            alert("please prvoide all details")
            return;
            }
            const obj = {
                name,
                email,
                password
            }

            try{
                const res = await axios.post("http://localhost:10000/signup",obj);

                if(res.data.status){
                    navigate("/login");
                }
                

            }catch(e){
                console.log(e);
                
            }
            
    }

  return (
    <div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type='text' value={name} placeholder='enter name' onChange={(e)=>setname(e.target.value)}></input>
        <input type='email' value={email} placeholder='enter email' onChange={(e)=>setemail(e.target.value)}></input>
        <input type='password' value={password} placeholder='enter password' onChange={(e)=>setpassword(e.target.value)}></input>
        <input type='submit' value="Sign up" className='border-2 p-2'></input>
            </form>

    </div>
  )
}

export default Signup