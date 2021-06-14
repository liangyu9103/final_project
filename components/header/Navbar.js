import styles from './Navbar.module.scss'

export default function Navbar() {
        return (
                <div className={styles['nav-container']}>
                    <nav className={styles.nav}>
                        <ul className={styles.nav_list}>
                            <li><a href="#">home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">services</a></li> 
                            <li><a href="#">content</a></li> 
                        </ul>
                    </nav>
                </div>
            )
}






