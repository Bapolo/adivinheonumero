import { useState,useEffect,useContext } from 'react'
import Botao from './Botao'
import BotaoLogin from './BotaoLogin'
import BotaoLogout from './BotaoLogout'
import { LoginContext } from '../LoginContext'
import { BsPersonFillCheck } from "react-icons/bs";
import SeletNivel from './SeletNivel'
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { BsFillEmojiTearFill } from "react-icons/bs";
import { adicionarPontuacaoNoBancoDeDados } from '../funcoesCrud'
import { useNavegar } from './funcoes/useNavegar'

function Home()
{
    const [nivel,setNivel] = useState("facil")
    const [resultado,setResultado] = useState(null)
    const [numero,setNumero] = useState(null)
    const {logado} = useContext(LoginContext)
    const [pontos,setPontos] = useState(0)
    const  navegar  = useNavegar()

    useEffect(() => {
        const numeroGeradoNoJogoAnterior = sessionStorage.getItem("numero")
        const resultadoJogoAnterior = sessionStorage.getItem("resultado")

        if (numeroGeradoNoJogoAnterior !== null) {
            setNumero(numeroGeradoNoJogoAnterior)
        }

        if (resultadoJogoAnterior !== null) {
            setResultado(resultadoJogoAnterior) 
        }

        if (sessionStorage.getItem("nivelAnterior"))
        {
            setNivel(sessionStorage.getItem("nivelAnterior"))
        }
    }, [])

    useEffect(() => {
        if (resultado !== "true")
        {
            setPontos(0)
        }

        if (resultado === "true" && nivel === "facil")
        {
            setPontos(3)
        }

        if (resultado === "true" && nivel === "medio")
        {
            setPontos(2)
        }

        if (resultado === "true" && nivel === "dificil")
        {
            setPontos(4)
        }

    }, [resultado])

    useEffect(() =>
    {
        if (logado && pontos > 0)
        {
            adicionarPontuacaoNoBancoDeDados("pontuacao", sessionStorage.getItem("userUid"), pontos)
            console.log(`${pontos} Ponto(s) adicionado(s) para o usuario: `, sessionStorage.getItem("userUid"))
        }

    }, [pontos])

    function selecionarNivel(e)
    {        
        setNivel(e.target.value)     
    }

    function redirecionar(tela)
    {
        sessionStorage.setItem("nivel", nivel)
        navegar(tela)
    }

    return (
        <>
            <h1>Click em Start para jogar!</h1>

            {resultado === "false" && <p>Infelizmente você não acertou <BsFillEmojiTearFill />, o número correto é {numero}</p>}
            {resultado === "true" && <p>Parabéns <BsFillEmojiSunglassesFill />, você acertou, o número é {numero}</p>}

            <Botao texto = "start" onClick = { () => redirecionar("/jogar") } className = 'botao-azul'/>

            <p>Selecione a dificuldade</p>

            <SeletNivel value = {nivel} onChange = {selecionarNivel} />
           
            {logado && <p> <BsPersonFillCheck /> {sessionStorage.getItem("userName")}</p>}
            {!logado ? <BotaoLogin /> : <BotaoLogout />}
        </>
    )
}

export default Home