import { useContext } from "react"
import { logout } from "../Logout"
import { LoginContext } from "../LoginContext"

function BotaoLogout()
{
    const {setLogado} = useContext(LoginContext)

    function sair()
    {
        const log = logout()

        if (log)
        {
            sessionStorage.clear()
            setLogado(false)
        }
    }

    return (
        <button onClick = { sair }>Logout</button>
    )
}

export default BotaoLogout