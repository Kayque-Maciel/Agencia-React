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

        <footer>
            <p>Siga-nos em nossas redes sociais</p>
            
            <div>
                <img src={insta} alt="Instagram" />
                <img src={face} alt="Facebook" />
                <img src={tik} alt="Tik Tok" />
                <img src={whats} alt="Whatsapp" />
            </div>

            <p>Telefone de contato (11) 99999 - 9999</p>
        </footer>
        </>
    )
}

export default Conteudo