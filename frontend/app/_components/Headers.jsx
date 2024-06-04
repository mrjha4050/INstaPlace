"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'

export default function Headers() {
  const {user} = useUser();
  const [isLogin, setIsLogin]= useState();
  // console.log(window.location.href)
  useEffect(()=>{
    setIsLogin(window.location.href.toString().includes('sign-in'));
    setIsLogin(window.location.href.toString().includes('sign-up'));
  },[])
  return !isLogin&&(
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a href='/'>Marketplace</a></li>
            <li><a>More</a></li>
            <li><a>Career</a></li>
          </ul>
        </div>
         <a className="btn btn-ghost text-2xl" href='/'>INstaProp</a>                                 
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold ">
          <li><button className='btn btn-ghost font-normal'>Home</button></li>
          <li><button className='btn btn-ghost font-normal'>Marketplace</button></li>
          <li><button className='btn btn-ghost font-normal'>More</button></li>
          <li><button className='btn btn-ghost font-normal'>Career</button></li>
        </ul>
      </div>

      { !user? <div className="navbar-end gap-1 pl">
        <a href='/sign-in' className="btn btn-accent">Login</a>
        <a href='/sign-in' className="btn btn-accent">Register</a>
      </div>
      :
      <div className="flex items-center left-8 ">
        <UserButton className="text-lg"/>
      </div> }


    </div>
  )
}
