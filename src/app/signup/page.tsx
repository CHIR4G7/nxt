"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from "axios"

const SignUpPage = () => {

  const router = useRouter();

    const [user,setUser] = useState({
        email: '',
        password: '',
        username: ''
    })

    const handleSignup = async ()=>{
      try {
        const response = await axios.post('/api/users/signup',user);
        router.push('/login');
      } catch (error:any) {
        console.log("sign up failed",error)
      }
    }
  return (
    <div className='flex h-screen w-full'>
     <div className='flex  w-full justify-center items-center flex-col'>
        <h1>Sign up</h1>
        <div className='flex flex-col'>
            <label htmlFor="username">username</label>
            <input type="text" id='username' value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} className='border-2'/>
            <label htmlFor="email">email</label>
            <input type="email" id='email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} className='border-2'/>
            <label htmlFor="password">password</label>
            <input type="password" id='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} className='border-2'/>
            <button className='border-2 p-2 mt-2' onClick={handleSignup}>Sign up</button>
            <Link href='/login' className='text-blue-300 underline'>Visit Login</Link>
        </div>
     </div>
    </div>
  )
}

export default SignUpPage
