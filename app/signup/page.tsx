"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const page = () => {
    const [ user, setUser ]  = useState({
        email : "",
        password : "",
        username : ""
    })    
  return (
    <div className='dark:bg-slate-800 h-screen '>
    <h1 className='text-5xl text-bold text-center mb-5 pb-5'>
        Sign up
    </h1>
    <form className='mx-auto text-center'>
        <label className="block mt-5 mb-3">
            <span className="block text-xl font-medium text-white ml-0">Username</span>
            <input type="text" className="peer w-2/6 h-8 text-xl font-medium text-black " name='username' onChange={(e)=> setUser({...user, username:e.target.value})}/>
            
        </label>
        <label className="block bg-dark mb-3 ">
            <span className="block text-xl font-medium text-white">Email</span>
            <input type="email" className="peer w-2/6 h-8 text-xl font-medium text-black " name='email' onChange={(e)=> setUser({...user, email:e.target.value})}/>
        </label>
        <label className="block bg-dark mb-3">
            <span className="block text-xl font-medium text-white">Password</span>
            <input type="password" className="peer w-2/6 h-8 text-xl font-medium text-black " name='password' onChange={(e)=> setUser({...user, password:e.target.value})}/>
        </label>
    <button className='bg-sky-500 hover:bg-sky-700 rounded-full px-5 py-2'>Submit</button>
    </form>
    <Link href='/login' className='text-blue'>Visit Login Page</Link>
</div>
  )
}

export default page