function TextosComponentes(){
    return(
        <>
        <section>
            <h2>Venha explorar esse lugar incrível {props.lugar} !!</h2>
            <p>{props.texto}</p>
            <img src={props.logo_texto} alt="logo" />
        </section>
        </>
    )
}

export default TextosComponentes