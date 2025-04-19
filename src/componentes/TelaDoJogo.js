import { useState, useEffect } from 'react'
import Botao from './Botao'
import '../App.css'
import { useNavegar } from './funcoes/useNavegar'


function TelaDoJogo()
{
    const [numeroTestado,setNumeroTestado] = useState("")
    const [mensagemDeFeedback,setMensagemDeFeedback] = useState("Escolha um número de 1 à 100")
    const [tentativas,setTentativas] = useState(0)
    const [erro,setErro] = useState(false)

    const redirecionar = useNavegar()

    useEffect(() => {
        const dificuldade = sessionStorage.getItem("nivel") || "facil"
        numeroDeTentativas(dificuldade)
        const n = Math.floor( Math.random() * 100) + 1
        sessionStorage.setItem("numeroAleatorio",n)
        sessionStorage.setItem("numero",n)
        sessionStorage.setItem("nivelAnterior",sessionStorage.getItem("nivel"))
    }, [])

    function numeroDeTentativas(dificuldade)
    {
        let tentativasInicial = 9

        if (dificuldade === 'medio')
        {
            tentativasInicial = 6
        }

        if(dificuldade === 'dificil')
        {
            tentativasInicial = 3
        }      

        setTentativas(tentativasInicial)
    }

    function receberNumero(e)
    {
        setErro(false)
        setNumeroTestado(e.target.value)
    }

    function verificarSeAcertou()
    {
        if (numeroTestado === "")
        {
            setErro(true)
            return 
        }

        if (tentativas <= 1)
        {
            sessionStorage.setItem("resultado", false)
            redirecionar("/")
        }

        if (numeroTestado < sessionStorage.getItem("numeroAleatorio"))
        {                
            setMensagemDeFeedback("O número digitado é menor")
        }

        if(numeroTestado > sessionStorage.getItem("numeroAleatorio"))
        {
            setMensagemDeFeedback("O número digitado é maior")
        }
        
        if (numeroTestado == sessionStorage.getItem("numeroAleatorio"))
        {
            sessionStorage.setItem("resultado",true)
            redirecionar("/")
        }

        setTentativas(tentativas - 1)
        setNumeroTestado("")
        return
    }

    function enter(e)
    {
        if (e.key === "Enter")
        {
            verificarSeAcertou()
        }
    }

    function voltar()
    {
        sessionStorage.setItem("resultado", null)
        redirecionar("/")
    }

    return (
        <>
            <h2>Tentativas: {tentativas}</h2>

            {erro && <p className = 'alerta-danger'>O campo de entrada não pode estar vázio!</p>}

            <h2>{ mensagemDeFeedback }</h2>

            <input type = 'number' value = { numeroTestado } onChange = { receberNumero } onKeyDown = { enter }/>

            <Botao texto = 'advinhar' onClick = { verificarSeAcertou } className= "botao-azul"/>

            <Botao texto = 'voltar' onClick = { voltar }/>
        </>
    )
}

export default TelaDoJogo