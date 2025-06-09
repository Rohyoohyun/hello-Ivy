import styles from '@/shared/css/Home/Navigator.module.css';
import PlusBtn from '@/widgets/PlusBtn';

export default function Navigator() {
    return (
        <div className={styles.container} >
            <p className={styles.TextStyle}>이런 프로젝트 하나하나가 저를 성장시켰어요.</p>
            <p className={styles.TextStyle}> 궁금하시다면, 지금 바로 <span className={styles.PointText}>클릭</span>!</p>
            <PlusBtn text="프로젝트 보러가기" to="/about" />
        </div>
    );
}