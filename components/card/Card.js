// import styles from './Card.module.scss'

export default function Card() {
    return (
        <div className={styles['card-container']}>
            <div className={styles.card_middle}>
                <div className={styles.front}>
                    <img src="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="" className={style.card_image}/>
                </div>
                <div className={styles.back}>
                    <div className={styles.back_content_middle}>
                        <h2 className={styles.back_title}>liang</h2>
                        <p className={styles.back_description}>1999</p>
                    </div>
                </div>
            </div>
        </div>
    )
}









