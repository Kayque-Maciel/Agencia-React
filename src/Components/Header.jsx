import {Link} from "react-router-dom"

import styles from "../Components/css/Header.module.css"
import logo from "../Components/Images/viagens.jpg"
import lupa from "../Components/Images/lupa.png"

function Header(){
    return(
        <>
        <header>
            <Link to="/"><img src={logo} alt="logo" className={styles.logo}/></Link>
            <nav>
                <ul className={styles.navlist}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Grandcanyon">Grand Canyon</Link></li>
                    <li><Link to="/Escocia">Escócia</Link></li>
                    <li><Link to="/Muralhasdachina">Muralhas da China</Link></li>
                    <li><Link to="/Aruba">Aruba</Link></li>
                </ul> 
            </nav>

            <input type="text" id={styles.search}/>
            <img src={lupa} alt="lupa" className={styles.lupa}/>
        </header>
        </>
    );
}

export default Header;