import { useContext, useState } from "react"
import { LoginContext } from "./LoginContext"

function LoginProvider({children})
{
    const [logado,setLogado] = useState(false)

    return (
        <LoginContext.Provider value = {{logado,setLogado}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider