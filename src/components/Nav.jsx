import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
<nav className='pt-10 text-2xl flex justify-center gap-10'>
    <NavLink style={(e)=>{return{
      color: e.isActive ? "tomato":"",
      fontWeight: e.isActive? "bold":"",
    }}} to="/">Home</NavLink>
    

    <NavLink 
    style={(e)=>{return{
      color: e.isActive ? "tomato":"",
      fontWeight: e.isActive ? "bold": "",
    }} }
    to="/create">Create</NavLink>


    <NavLink 
     style={(e)=>{return{
      color: e.isActive ? "tomato":"",
      fontWeight: e.isActive ? "bold": "",
    }} }
    to="/show">Show</NavLink>

<NavLink 
     style={(e)=>{return{
      color: e.isActive ? "tomato":"",
      fontWeight: e.isActive ? "bold": "",
    }} }
    to="/about">About</NavLink>
</nav>

    )
}

export default Nav