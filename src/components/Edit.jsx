import React, { useState ,useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserContext } from '../utils/context'

const Edit = () => {
    
    const navigate = useNavigate()
    const [users,setusers]=useContext(UserContext)
    const {title}=useParams()

    const UserIndex = users.findIndex((u)=> u.name==title)
    const [user, setuser] = useState({
        id: users[UserIndex].id,
        name: users[UserIndex].name,
        position: users[UserIndex].position,
        mobile: users[UserIndex].mobile,

    })
const ChangeHandler=(e)=>{
    const copyuser ={...user}
    copyuser[e.target.name]=e.target.value
    setuser(copyuser)
}


  const SubmitHandler =(e) =>{
   e.preventDefault()
               const edituser={id: user.id, name: user.name, position: user.position,mobile: user.mobile}

   const copyusers =[...users]
copyusers[UserIndex]=edituser
   setusers(copyusers)
  //  setusers([...users, user])

      localStorage.setItem("users",JSON.stringify(copyusers))
      toast.success("user successfully updated")

    
  navigate("/show")
  }
  return (
    <form onSubmit={SubmitHandler}
    className='flex justify-start flex-col w-1/2 mt-5 m-auto container items-center'>
    <h2 className='text-3xl mb-4 text-orange-300 text-center font-bold'>Update Employee Record</h2>
    
    <input className='border-2 border-black p-2 w-1/2 mb-4' name='id'
     onChange={ChangeHandler} value={user.id} type="text" placeholder='Employee id' />
    
    <input className='border-2 border-black p-2 mb-4 w-1/2' name='name' onChange={ChangeHandler} value={user.name} type="text" placeholder='Full name' />

    <input className='border-2 border-black p-2 mb-4 w-1/2' name='position' onChange={ChangeHandler} value={user.position} type="text" placeholder='Position' />

    <input className='border-2 border-black p-2 mb-4 w-1/2' name='mobile' onChange={ChangeHandler} value={user.mobile} type="text" placeholder='Mobile no.' />
    
    <button className='mb-4 w-1/2 p-2 text-1xl text-white bg-zinc-300'>Update</button>
    
    <hr />
        </form>  )
}

export default Edit