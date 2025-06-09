import styles from '@/shared/css/AboutMe/MyInfo.module.css';

export default function MyInfo() {
    return (
        <div className={styles.container}>
            <p className={styles.MainText}>About Me</p>

            <div className={styles.imgWrapper}>
                <img src="/MeImg/AboutMeImg.svg" alt="AboutMeImage" className={styles.AboutMeImg} />

                {/* 말풍선 */}
                <div className={`${styles.speechBox} ${styles.topRight}`}>
                    <p><span className={styles.PointText}>노유현: Roh yoohyun</span></p>
                    <p>2008년 02월 19일생</p>
                </div>

                <div className={`${styles.speechBox} ${styles.middleLeft}`}>
                    <p><span className={styles.PointText}>학력</span></p>
                    <p>
                        부산소프트웨어마이스터고<br />
                        임베디드SW과 SW트랙 재학
                    </p>
                </div>
            </div>

            {/* 해시태그 */}
            <div className={`${styles.hashtag} ${styles.tag1}`}>#호기심_만땅</div>
            <div className={`${styles.hashtag} ${styles.tag2}`}>#친절한_INTJ</div>
            <div className={`${styles.hashtag} ${styles.tag3}`}>#모르면_배워요</div>
            <div className={`${styles.hashtag} ${styles.tag4}`}>#끝까지_시도하는</div>
            <div className={`${styles.hashtag} ${styles.tag5}`}>#믿고_맡기는</div>
        </div>
    );
}