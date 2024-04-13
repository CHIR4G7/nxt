'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const Profile = () => {

  const router = useRouter();
  const [user,setUser] = useState(null)
  const handleLogOut = async ()=>{
    try {
      const response = await axios.get('/api/users/logout');
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  const getUserDetails = async ()=>{
    const response = await axios.get('/api/users/me');
    console.log(response.data);
    setUser(response.data);
  }

  return (
    <div>
      this is the profile page
      <button className='border-2 p-2' onClick={handleLogOut}>log out</button>
      <button className='border-2 p-2' onClick={getUserDetails}>get user</button>
    </div>
  )
}

export default Profile
