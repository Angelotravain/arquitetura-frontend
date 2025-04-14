import styles from './imageAvatar.module.css';

export function ImageAvatar() {

    return(
        <div>
            <img className={styles.avatar} src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg" alt=""/>
        </div>
    );
}