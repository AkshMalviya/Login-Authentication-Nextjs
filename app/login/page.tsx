"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ user, setUser ]  = useState({
        email : "",
        password : "",
        username : ""
    })        
    let e : String[] | Object
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        console.log(e)
    }                          
  return (
    <div className='text-center dark:bg-slate-800 h-screen'>
        <h1 className='text-5xl text-bold text-center mb-5 pb-5'>
            Login
        </h1>
        <form onSubmit={handleSubmit}>
            <label className="block mt-5 mb-3">
                <span className="block text-xl font-medium text-white">Username</span>
                <input type="text" className="peer w-1/4 h-8 text-xl font-medium text-black " name='username' onChange={(e)=> setUser({...user, username:e.target.value})}/>
                
            </label>
            <label className="block bg-dark mb-3">
                <span className="block text-xl font-medium text-white">Password</span>
                <input type="password" className="peer w-1/4 h-8 text-xl font-medium text-black " name='password' onChange={(e)=> setUser({...user, password:e.target.value})}/>
            </label>
        <button className='bg-sky-500 hover:bg-sky-700 rounded-full px-5 py-2'>Submit</button>
        </form>
        <Link href='/signup'>Visit Signup Page</Link>
    </div>
  )
}

export default page