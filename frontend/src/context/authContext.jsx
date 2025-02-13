import react, { Children, createContext, useState } from 'react'

const userContext = createContext()

const authContext = (Children) => {
    const [user, setUser] = useState(null)


    const login = () =>{
        setUser(user)
    }

    const logout = () =>{
        setUser(null)
        localStorage.removeItem("token")
    }

    return(
       <userContext.Provider value = {{user, login, logout}}>
            {Children}
       </userContext.Provider> 

    )
}

 export const useAuth =() => userContext(userContext)
export default authContext