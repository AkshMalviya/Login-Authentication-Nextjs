"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import  { toast } from 'react-hot-toast'
import axios from 'axios'

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ user, setUser ]  = useState({
        email : "",
        password : "",
        username : ""
    })   
    // useEffect(()=>{
    //     if(user.email === "" || user.password==="" || user.username===""){
    //         toast.error("Cannot be empty")
    //     }
    // }, [user]) 
    
    const handleSubmit = async(e: { preventDefault: () => void })=>{
        try{
            e.preventDefault();
            if(user.email === "" || user.password==="" || user.username===""){
                console.log("empty");
                return toast.error("Cannot be empty")
            }
            const res = await axios.post("api/users/signup", user)
            console.log(res.data)
            router.push("/login")
        } catch (error:any) {
            console.log(error);
            toast.error(error.response.data.error || "Something Went Wrong! Try Again later")
        }
        
    }
  return (
    <div className='dark:bg-slate-800 h-screen '>
    <h1 className='text-5xl text-bold text-center mb-5 pb-5'>
        Sign up
    </h1>
    <form className='mx-auto text-center'>
        <label className="block mt-5 mb-3">
            <span className="block text-xl font-medium text-white ml-0">Username</span>
            <input type="text" className="peer w-2/6 h-8 text-xl font-medium text-black " name='username' value={user.username} onChange={(e)=> setUser({...user, username:e.target.value})}/>
            
        </label>
        <label className="block bg-dark mb-3 ">
            <span className="block text-xl font-medium text-white">Email</span>
            <input type="email" className="peer w-2/6 h-8 text-xl font-medium text-black round" name='email' value={user.email} onChange={(e)=> setUser({...user, email:e.target.value})}/>
        </label>
        <label className="block bg-dark mb-3">
            <span className="block text-xl font-medium text-white">Password</span>
            <input type="password" className="peer w-2/6 h-8 text-xl font-medium text-black " name='password' value={user.password} onChange={(e)=> setUser({...user, password:e.target.value})}/>
        </label>
    <button onClick={handleSubmit} className='bg-sky-500 hover:bg-sky-700 rounded-full px-5 py-2'>Submit</button>
    </form>
    <Link href='/login' className='text-blue'>Visit Login Page</Link>
</div>
  )
}

export default page