import styles from "../Components/css/Aruba.module.css"
import TextosComponentes from "./TextosComponentes"
import logo from "../Components/Images/viagens.jpg"

function Aruba (){
    return(
        <>
        <section className={styles.body}>
            <TextosComponentes 
            lugar="Aruba"
            texto="."
            logo_texto={logo}
            />
        </section>
        </>
    )
}

export default Aruba