import styles from "../Components/css/Escocia.module.css"
import TextosComponentes from "./TextosComponentes"
import logo from "../Components/Images/viagens.jpg"

function Suecia (){
    return(
        <>
        <section className={styles.body}>
            <TextosComponentes 
            lugar="Escócia"
            texto="Turismo na Escócia, localizado ao lado da Inglaterra, fica a Escócia, um dos países pertecentes ao Reino Unido. Que traz consigo uma grande carga histórica, lindas paisagens naturais e contruções antigas, como seus castelos medievais."
            logo_texto={logo}
            />
        </section>
        </>
    )
}

export default Suecia