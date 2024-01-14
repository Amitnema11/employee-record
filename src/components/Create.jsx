import React, { useState ,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserContext } from '../utils/context'

const Create = () => {
    const navigate = useNavigate()
    const [users,setusers]=useContext(UserContext)
    const [id, setid] = useState("")
const [name, setname] = useState("")
const [position, setposition] = useState("")
const [mobile, setmobile] = useState("")


  const SubmitHandler =(e) =>{
   e.preventDefault()
   const user={id, name, position,mobile}

   const copyusers =[...users]
   copyusers.push(user)
   setusers(copyusers)
  //  setusers([...users, user])

      localStorage.setItem("users",JSON.stringify(copyusers))
      toast.success("user successfully created")

      setid("")
      setname("")
      setposition("")
      setmobile("")

  navigate("/show")
  }
  return (
    <form onSubmit={SubmitHandler}
    className='flex justify-start flex-col w-1/2 mt-5 m-auto container items-center'>
    <h2 className='text-3xl mb-4 text-orange-300 text-center font-bold'>Register Employee</h2>
    
    <input className='border-2 border-black p-2 w-1/2 mb-4'
     onChange={(e)=> setid(e.target.value)} value={id} type="text" placeholder='Employee id' />
    
    <input className='border-2 border-black p-2 mb-4 w-1/2' onChange={(e)=> setname(e.target.value)} value={name} type="text" placeholder='Full name' />

    <input className='border-2 border-black p-2 mb-4 w-1/2' onChange={(e)=> setposition(e.target.value)} value={position} type="text" placeholder='Position' />

    <input className='border-2 border-black p-2 mb-4 w-1/2' onChange={(e)=> setmobile(e.target.value)} value={mobile} type="text" placeholder='Mobile no.' />
    
    <button className='mb-4 w-1/2 p-2 text-1xl text-white bg-zinc-300'>Submit</button>
    
    <hr />
        </form>  )
}

export default Create