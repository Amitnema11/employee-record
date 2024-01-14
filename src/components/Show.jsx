import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../utils/context'

const Show = () => {
  const[users,setusers]=useContext(UserContext)
    const DeleteHandler =(index)=>{
        const copyusers=[...users]
        copyusers.splice(index,1)
        setusers(copyusers)
    
        localStorage.setItem("users",JSON.stringify(copyusers))
        toast.warn("user deleted successfully")
      }
  return (
    <>
  <h1 className='text-3xl mb-5 text-center mt-5 font-bold text-orange-300'>Registered Employee Record</h1><hr />
 
 <table className="min-w-full">
  <thead >
    <tr >
      <th className='w-1/5 text-center'>Employee Id.</th>
      <th className='w-1/5 text-center'>Full Name</th>
      <th className='w-1/5 text-center'>Position</th>
      <th className='w-1/5 text-center'>Mobile No.</th>
      <th className='w-1/5 text-center'>Action</th>
    </tr> 
  </thead>
  <tbody>
    
  {users.length >0 ? users.map((user,index)=>{return(
    <tr key={index}>
      <td className='w-1/5 text-center'>{user.id}</td>
      <td className='w-1/5 text-center'>{user.name}</td>
      <td className='w-1/5 text-center'>{user.position}</td>
      <td className='w-1/5 text-center'>{user.mobile}</td>
      <td className='w-1/5 text-center'>
     
      <Link to={`/show/edit/${user.name}`}>✏️</Link>
      <span onClick={()=> DeleteHandler(index)}>❌</span>
     

      </td>
    </tr>
   )}).reverse(): "Loading...."}
   
  </tbody>
</table>

</>
)
}

export default Show