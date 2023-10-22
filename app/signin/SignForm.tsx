"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const SignForm = (props: Props) => {
  const [user,setuser]=useState({
    email:"",
    password:""
  })
  const router=useRouter();
  const register =()=>{
    console.log(user);
    router.push("/signin")
  }
    return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <div className="p-10 rounded-lg shadow-lg flex flex-col">
            <h1 className="text-xl font-medium mb-4">Sign In</h1>
       
            
            <label htmlFor="" className='mb-2'>Email</label>
            <input 
            type="email"
            className='p-2  border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600  text-black '
            id='email'
            value={user.email}
            placeholder='email'
            
            onChange={(e)=>{setuser({...user,email:e.target.value})}}/>

<label htmlFor="" className='mb-2'>Password</label>
            <input 
            type="password"
            className='p-2  border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600  text-black '
            id='password'
            value={user.password}
            placeholder='password'
            
            onChange={(e)=>{setuser({...user,password:e.target.value})}}/>
           <button onClick={register} className='p-2 border bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600 '>
            Login 
           </button>
           <Link href='/signup' className='text-sm  text-center mt-5 text-neutral-600 underline '>Create an Account</Link>
           <Link href='/' className='text-center mt-2 flex  justify-center py-3  rounded-xl mx-[25%] border  bg-teal-600 text-white border-gray-300  mb-4 focus:outline-none focus:border-gray-600'>Home</Link>
        </div>
    </div>
  )
}

export default SignForm