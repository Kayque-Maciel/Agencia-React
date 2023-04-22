import styles from "../Components/Header.module.css"
import logo from "../Components/Images/viagens.jpg"
import lupa from "../Components/Images/lupa.png"
import mala from "../Components/Images/mala.jpg"

function Header(){
    return(
        <>
        <header>
            <img src={logo} alt="logo" className={styles.logo}/>
            <nav>
                <ul className={styles.navlist}>
                    <li><a href="/about">Home</a></li>
                    <li><a href="/contact">Grand Canyon</a></li>
                    <li><a href="/press">Escócia</a></li>
                    <li><a href="/press">Muralhas da China</a></li>
                    <li><a href="/press">Arábia</a></li>
                </ul> 
            </nav>

            <input type="text" id={styles.search}/>
            <img src={lupa} alt="lupa" className={styles.lupa}/>
        </header>

        <section>
            <img src={mala} alt="mala" className={styles.mala}/>
        </section>
        </>
    );
}

export default Header;