import React, { useState } from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const navigate  = useNavigate()


    async function handleSubmit(e){
        e.preventDefault()

        if(!email  || !password) {
        alert("please prvoide all details")
        return;
        }
        const obj = {
            email,
            password
        }

        try{
            const res = await axios.post("https://post-balkend.onrender.com/login",obj);

            if(res.data.status){
                navigate("/home");
            }
        
        }catch(e){
            console.log(e);
            
        }
        
}
  return (
    <div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' value={email} placeholder='enter email' onChange={(e)=>setemail(e.target.value)}></input>
        <input type='password' value={password} placeholder='enter password' onChange={(e)=>setpassword(e.target.value)}></input>
        <input type='submit' value="Login" className='border-2 p-2'></input>
            </form>

    </div>
  )
}

export default Login