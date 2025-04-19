import { useState } from 'react'

export function useNivelSelecionado()
{
    const [nivel,setNivel] = useState("falcil")

    const selecionarNivel = (e) =>
    {
        setNivel(e.target.value)
    }

    return {nivel, selecionarNivel}
}