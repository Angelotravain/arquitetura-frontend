import {Link} from "react-router-dom";
import styles from "./navTop.module.css";

export function NavTop(){
    return(
        <div className={styles.navAlign}>
            <ul>
                <li><Link className={styles.linkStyle} to="/">Blog</Link></li>
                <li><Link className={styles.linkStyle} to="/about">Sobre</Link></li>
                <li><Link className={styles.linkStyle} to="/description">Descrição</Link></li>
            </ul>
        </div>
    );
}