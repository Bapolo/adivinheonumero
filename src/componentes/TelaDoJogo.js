import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Botao from './Botao'

function TelaDoJogo()
{
    const [numeroAleatorio,setNumeroAleatorio] = useState(undefined)
    const [numeroTestado,setNumeroTestado] = useState("")
    const [mensagemDeFeedback,setMensagemDeFeedback] = useState("Escolha um número de 1 à 100")

    const redirecionar = useNavigate()

    useEffect(() => {
        const n = Math.floor( Math.random() * 100) + 1
        setNumeroAleatorio(n)
        console.log(n)
    }, [])

    function chutarNumero(e)
    {
        setNumeroTestado(e.target.value)
        console.log(e.target.value)
    }

    function verificarSeAcertou()
    {
        if (numeroTestado !== "")
        {
            if (numeroTestado < numeroAleatorio)
            {
                console.log("O número digitado é menor")
            }
            else if(numeroTestado > numeroAleatorio)
            {
                console.log("O número digitado é maior")
            }
            else
            {
                console.log("Parabén, vc acertou!")
                redirecionar("/")
            }
        }
        else
        {
            alert("Digite algum valor")
        }

        setNumeroTestado("")
        return
    }

    return (
        <>
            <h2>Número de tentativas</h2>

            <h2>{ mensagemDeFeedback }</h2>

            <input type = 'number' value = { numeroTestado } onChange = { chutarNumero } />

            <Botao texto = 'advinhar' onClick = { verificarSeAcertou }/>
        </>
    )
}

export default TelaDoJogo