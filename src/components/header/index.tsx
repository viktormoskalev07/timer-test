import React from "react";
import {Link} from "react-router-dom";
import styles from './index.module.scss'
import {ROUTES} from "../../routes";

export const Header: React.FC = () => {

    return <header className={styles.header}>
        <nav>

            <ul>
                {ROUTES.map(({link}, i) => <li key={i}><Link to={link}>{link} </Link></li>)}
            </ul>
        </nav>
 
    </header>

}
