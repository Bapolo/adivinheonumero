import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Botao from './Botao'

function Home()
{
    const [nivel,setNivel] = useState("facil")

    function selecionarNivel(e)
    {
        setNivel(e.target.value)     
    }

    const navegarEntreTela = useNavigate()

    function redirecionar()
    {
        navegarEntreTela(`/jogar?nivel=${nivel}`)
    }

    return (
        <>
            <h1>Click em Start para jogar!</h1>

            <Botao texto = "start" onClick = { redirecionar }/>

            <p>Selecione a dificuldade</p>

            <select value = {nivel} onChange = {selecionarNivel}>
                <option value = "facil">Fácil</option>
                <option value = "medio">Médio</option>
                <option value = "dificil">Difícil</option>
            </select>
        </>
    )
}

export default Home