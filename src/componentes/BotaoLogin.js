import { useContext } from "react"
import { loginWithGoogle } from "../loginWithGoogle"
import { LoginContext } from "../LoginContext"

function BotaoLogin()
{
    const {logado,setLogado} = useContext(LoginContext)

    async function login()
    {
        const user = await loginWithGoogle()

        if (user.displayName)
        {
            setLogado(true)
        }
    }

    return (
        <button onClick = {login}>Login com google</button>
    )
}

export default BotaoLogin