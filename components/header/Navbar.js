import styles from './Navbar.module.scss'

export default function Navbar() {
        return (
                <div className={styles['nav-container']}>
                    <nav className={styles.nav}>
                        <ul className={styles.nav_list}>
                            <li>home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>services</li> 
                            <li>content</li> 
                        </ul>
                    </nav>
                    {/* <a href="#" className={styles['btn-area']>log in</a> */}
                </div>
            )
        
        
    
}






