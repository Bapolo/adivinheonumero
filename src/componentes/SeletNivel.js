function SeletNivel({value, onChange})
{
    return (
        <>
            <select value = {value} onChange = {onChange}>
                <option value = "facil">Fácil</option>
                <option value = "medio">Médio</option>
                <option value = "dificil">Difícil</option>
            </select>
        </>
    )
}

export default SeletNivel