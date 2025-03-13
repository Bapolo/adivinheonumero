import { useState,useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import Botao from './Botao'

function useQuery()
{
    return new URLSearchParams(useLocation().search)
}

function Home()
{
    const [nivel,setNivel] = useState("facil")
    const [resultado,setResultado] = useState(null)
    const [numero,setNumero] = useState(null)
    const query = useQuery()

    useEffect(() => {
        const numeroQuery = query.get("numero")
        const resultadoQuery = query.get("resultado")

        if (numeroQuery !== null) {
            setNumero(numeroQuery)
        }

        if (resultadoQuery !== null) {
            setResultado(resultadoQuery === "true") // Converte para booleano
        }
    }, [])

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

            {resultado === false && <p>Infelizmente você não acertou, o número correto é {numero}</p>}
            {resultado === true && <p>Parabéns, você acertou, o número é {numero}</p>}

            <Botao texto = "start" onClick = { redirecionar } className = 'botao-azul'/>

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