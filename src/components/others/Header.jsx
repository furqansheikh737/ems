import React from 'react'
import { useState } from 'react';

const Header = () => {

  // const [username, setUsername] = useState('');
  // if(!username){
  //   setUsername("admin");
  //   } else {
  //   setUsername(data.firstName);
  // }

  const logoutHandler = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  }

  return (
    <div className='flex items-center justify-between'>
    <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-bold'>Username</span></h1>
    <button onClick={logoutHandler} className='bg-red-500 py-2 px-3 rounded text-sm font-medium'>Log Out</button>
    </div>
  )
}

export default Header