import styles  from './header.module.css';
import { NavTop } from './../navTop/navTop';
import { Information } from './../information/information';
import { ImageAvatar } from '../imageAvatar/imageAvatar';

export function Header(){

    return(
        <div className={styles.headerContainer}>
            <NavTop></NavTop>
            <div className={styles.headerAligin}>
                <ImageAvatar></ImageAvatar>
                <Information></Information>
            </div>
        </div>
    );
}