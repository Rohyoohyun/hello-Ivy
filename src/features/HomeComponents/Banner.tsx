import styles from '@/shared/css/Home/Banner.module.css';
import PlusBtn from '@/widgets/PlusBtn';

export default function Banner() {
  return (
    <div className={styles.contentWrapper}>
      <img src="/MeImg/HomeImg.svg" alt="HomeImage" className={styles.HomeImage} />

      <div className={styles.textBlock}>
        <p className={styles.SubText}>404: Ordinary Not Found</p>
        <p className={styles.MainText}>Designer:</p>
        <p className={styles.TextStyle}>공감으로 시작해,</p>
        <p className={styles.TextStyle}>
          책임감으로 완성하는 디자이너 &nbsp;
          <span className={styles.nameHighlight}>노유현</span>입니다.
        </p>
        
        <PlusBtn text="더보기" to="/about" />
      </div>
    </div>
  );
}