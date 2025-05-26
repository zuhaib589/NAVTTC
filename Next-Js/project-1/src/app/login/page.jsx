"use client"
import { useState } from "react"


const page = () => {

     const [userData , setUserData]=useState()



  return (
    <>

    <h1>{userData}</h1>
    <form className="max-w-md mx-auto bg-blue space-y-5 mt-4">
      <div>
        <label className="mb-2 text-sm text-slate-900 font-medium block">Email</label>
        <input type="email" placeholder="Enter Email" name="email"
          className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
      </div>

      <div>
        <label className="mb-2 text-sm text-slate-900 font-medium block">Password</label>
        <input type="password" placeholder="Enter Password" name="password"
          className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
      </div>

      <div className="flex">
        <input type="checkbox" className="w-4" />
        <label className="text-sm ml-4 text-slate-900">Remember me</label>
      </div>

      <button type="button"  className="!mt-8 px-6 py-2.5 text-sm font-medium bg-[#333] hover:bg-[#222] text-white rounded-sm cursor-pointer">Submit</button>
    </form>


    
    </>
  )
}

export default page