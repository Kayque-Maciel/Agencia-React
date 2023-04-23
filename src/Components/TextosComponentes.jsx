import styles from "../Components/css/Textos.Componentes.module.css"

function TextosComponentes(props){
    return(
        <>
        <div className={styles.texto_componentes}>
            <h2>Venha explorar esse lugar incrível {props.lugar} !!</h2>
            <p>{props.texto}</p>
            <img src={props.logo_texto} alt="logo" />
        </div>
        </>
    )
}

export default TextosComponentes