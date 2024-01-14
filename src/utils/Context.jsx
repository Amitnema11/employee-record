import React, { createContext, useState } from 'react'

export const UserContext= createContext()

const Context = (props) => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || [])
        
  return (
<UserContext.Provider value={[users,setusers]}>
    {props.children}
</UserContext.Provider>
    )
}

export default Context