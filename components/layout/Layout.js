import Navbar from '../header/Navbar'
import styles from './Layout.module.scss'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <Navbar />

            <main className={styles.main}>{props.children}</main>
        </div>
    )
}





