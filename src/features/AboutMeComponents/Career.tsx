import styles from '@/shared/css/AboutMe/Career.module.css';

export default function Career() {
    return (
        <div className={styles.container}>
            <div className={styles.infoRow}>
                <div className={styles.Award}>
                    <h2 className={styles.title}>수상경력</h2>

                    <div className={styles.yearGroup}>
                        <div className={styles.yearItemRow}>
                            <div className={styles.year}>2024</div>
                            <div className={styles.items}>
                                <div className={styles.awardItem}>
                                    <div className={styles.name}>BSSM 여름 AI 캠프 1학년부문 대상</div>
                                    <div className={styles.date}>7/18 ~ 7/19</div>
                                </div>
                                <div className={styles.awardItem}>
                                    <div className={styles.name}>화이트 해커 경진대회 입상</div>
                                    <div className={styles.date}>11/9 ~ 11/10</div>
                                </div>
                                <div className={styles.awardItem}>
                                    <div className={styles.name}>BDIA Dev-ton 일반부문 혁신상</div>
                                    <div className={styles.date}>7/30 ~ 11/20</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.License}>
                    <h2 className={styles.title}>자격증</h2>

                    <div className={styles.yearGroup}>
                        <div className={styles.yearItemRow}>
                            <div className={styles.year}>2024</div>
                            <div className={styles.items}>
                                <div className={styles.awardItem}>
                                    <div className={styles.name}>한국사능력검정시험 4급</div>
                                    <div className={styles.date}>8/22</div>
                                </div>
                                <div className={styles.awardItem}>
                                    <div className={styles.name}>정보처리기능사</div>
                                    <div className={styles.date}>준비중~</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}