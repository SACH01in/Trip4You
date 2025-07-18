import React, {createContext, useEffect, useState} from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAdmin, setisAdmin] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  },[])

const handleLogin = (username,password) => {
  console.log(username,password, "logged in")
}
const handleRegister = (name, username,password) => {
  console.log(name, username,password, "registered")
}


  return (
    <UserContext.Provider value={{ user, setUser, isAdmin, handleLogin, handleRegister }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext