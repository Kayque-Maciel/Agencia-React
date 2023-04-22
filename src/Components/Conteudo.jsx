import styles from "../Components/Conteudo.module.css"
import mala from "../Components/Images/mala.jpg"

function Conteudo(){
    return(
        <>
        <section>
            <img src={mala} alt="mala" className={styles.mala}/>
            <div className={styles.text}>
                <h1>Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit soluta excepturi aliquam, sint quisquam impedit hic ex beatae, vel a officia nostrum blanditiis iusto cum similique accusamus quo consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde accusamus doloremque dignissimos ab expedita quisquam, cum voluptatibus et, facilis sequi officia laboriosam assumenda veritatis iure a ullam architecto possimus.</p>
            </div>
        </section>
        </>
    )
}

export default Conteudo