import { useState, useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import Botao from './Botao'

function useQuery()
{
    return new URLSearchParams(useLocation().search)
}

function TelaDoJogo()
{
    const query = useQuery()
    const [numeroAleatorio,setNumeroAleatorio] = useState(undefined)
    const [numeroTestado,setNumeroTestado] = useState("")
    const [mensagemDeFeedback,setMensagemDeFeedback] = useState("Escolha um número de 1 à 100")
    const [tentativas,setTentativas] = useState(0)

    const redirecionar = useNavigate()

    useEffect(() => {
        const dificuldade = query.get("nivel") || "facil"
        numeroDeTentativas(dificuldade)
        const n = Math.floor( Math.random() * 100) + 1
        setNumeroAleatorio(n)
    }, [])

    function numeroDeTentativas(dificuldade)
    {
        let tentativasInicial
        if (dificuldade === 'medio')
        {
            tentativasInicial = 6
        }
        else if(dificuldade === 'dificil')
        {
            tentativasInicial = 3
        }
        else
        {
            tentativasInicial = 9
        }        

        setTentativas(tentativasInicial)
        console.log(tentativasInicial)
    }

    function chutarNumero(e)
    {
        setNumeroTestado(e.target.value)
        console.log(e.target.value)
    }

    function verificarSeAcertou()
    {
        if (numeroTestado !== "")
        {
            if (tentativas > 1)
            {
                if (numeroTestado < numeroAleatorio)
                {                
                    setMensagemDeFeedback("O número digitado é menor")
                }
                else if(numeroTestado > numeroAleatorio)
                {
                    setMensagemDeFeedback("O número digitado é maior")
                }
                else
                {
                    console.log("Parabén, vc acertou!")
                    redirecionar("/")
                }

                setTentativas(tentativas - 1)
            }
            else
            {
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

    function voltar()
    {
        redirecionar("/")
    }

    return (
        <>
            <h2>Tentativas {tentativas}</h2>

            <h2>{ mensagemDeFeedback }</h2>

            <input type = 'number' value = { numeroTestado } onChange = { chutarNumero } />

            <Botao texto = 'advinhar' onClick = { verificarSeAcertou }/>

            <Botao texto = 'voltar' onClick = { voltar }/>
        </>
    )
}

export default TelaDoJogo