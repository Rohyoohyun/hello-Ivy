import styles from '@/shared/css/Home/Navigator.module.css';
import PlusBtn from '@/widgets/PlusBtn';

export default function Navigator() {
    return (
        <div className={styles.container} >
            <p className={styles.TextStyle}>
                어떤 기술을 활용했고, <br/>
                어떤 결과를 만들었는지 궁금하지 않나요?<br/>
                아래에서 확인해 보세요! 
            </p>
            <PlusBtn text="더보기" to="/project" />
        </div>
    );
}