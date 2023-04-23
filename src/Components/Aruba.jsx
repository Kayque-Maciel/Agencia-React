import styles from "../Components/css/Aruba.module.css"
import TextosComponentes from "./TextosComponentes"
import logo from "../Components/Images/viagens.jpg"

function Aruba (){
    return(
        <>
        <section className={styles.body}>
            <TextosComponentes 
            lugar="Aruba"
            texto="Praias paradisíacas, mar cristalino, hotéis requintados e programação para toda a família são alguns dos atrativos de Aruba."
            logo_texto={logo}
            />
        </section>
        </>
    )
}

export default Aruba