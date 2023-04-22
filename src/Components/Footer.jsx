import styles from "../Components/Footer.module.css"
import insta from "../Components/Images/instagram.png"
import face from "../Components/Images/facebook.png"
import tik from "../Components/Images/tiktok.png"
import whats from "../Components/Images/whatsapp.png"

function Footer(){
    return(
        <>
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

export default Footer