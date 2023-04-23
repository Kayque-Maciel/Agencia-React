import styles from "../Components/css/Escocia.module.css"
import TextosComponentes from "./TextosComponentes"
import logo from "../Components/Images/viagens.jpg"

function Suecia (){
    return(
        <>
        <section className={styles.body}>
            <TextosComponentes 
            lugar="Grand Canyon"
            texto="Turismo na Escócia, localizado ao lado da"
            logo_texto={logo}
            />
        </section>
        </>
    )
}

export default Suecia