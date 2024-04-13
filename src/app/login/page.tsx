"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const LoginPage = () => {

  const router = useRouter();

    const [user,setUser] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async ()=>{
      try {
        const response = await axios.post('/api/users/login',user);
        router.push('/profile');
      } catch (error:any) {
        console.log("sign up failed",error)
      }
    }
  return (
    <div className='flex h-screen w-full'>
     <div className='flex  w-full justify-center items-center flex-col'>
        <h1>Login</h1>
        <div className='flex flex-col'>
           
            <label htmlFor="email">email</label>
            <input type="email" id='email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} className='border-2'/>
            <label htmlFor="password">password</label>
            <input type="password" id='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} className='border-2'/>
            <button className='border-2 p-2 mt-2' onClick={handleLogin}>Login</button>
            <Link href='/signup' className='text-blue-300 underline'>Visit signup</Link>
        </div>
     </div>
    </div>
  )
}

export default LoginPage