import styles from "../Components/css/Muralhasdachina.module.css"
import TextosComponentes from "../Components/TextosComponentes"
import logo from "../Components/Images/viagens.jpg"

function Muralhasdachina (){
    return(
        <>
        <section className={styles.body}>
            <TextosComponentes 
            lugar="Grand Canyon"
            texto="O Grand Canyon fica no estado do Arizona e é cortado pelo não tão tímido assim Rio Colorado, e forma uma paisagem mais imponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é um dos passeios mais procurados por quem visita Las Vegas, que fica no estado vizinho, Nevada"
            logo_texto={logo}
            />
        </section>
        </>
    )
}

export default Muralhasdachina