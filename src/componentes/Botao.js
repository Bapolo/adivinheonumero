function Botao({ texto, onClick})
{

    return (
        <button type = "button" onClick = { onClick }>{texto}</button>
    )
}

export default Botao