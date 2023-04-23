import styles from "../Components/css/Muralhasdachina.module.css"
import TextosComponentes from "../Components/TextosComponentes"
import logo from "../Components/Images/viagens.jpg"

function Muralhasdachina (){
    return(
        <>
        <section className={styles.body}>
            <TextosComponentes 
            lugar="Muralha da China"
            texto="É a mais longa estrutura já construída pelo homem. Em 1987, a Organização das Nações Unidas (ONU) classificou o monumento como Patrimônio Histórico Mundial, protegendo-o contra os projetos de contrução civil permitidos pela lei chinesas. Tem 21.196 Km de extensão e também é considerada uma das 7 maravilhas do mundo."
            logo_texto={logo}
            />
        </section>
        </>
    )
}

export default Muralhasdachina