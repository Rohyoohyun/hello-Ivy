import styles from '@/shared/css/Learning/Learning.module.css';
import { Posts } from '@/shared/Theme/Learn';
import Navbar from '@/widgets/NavBar';

// 타입스크립트 제네릭 함수, 한 번만 정의!
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Learning() {
  const chunks = chunkArray(Posts, 2); // 2개씩 묶기

  return (
    <div className={styles.container}>
      <Navbar />
      <p className={styles.MainText}>Learning</p>
      <img src="/MeImg/LearnImg.svg" alt="LearnImg" className={styles.LearnImg} />
      <main className={styles.mainContent}>
        {chunks.map((pair, index) => (
          <div className={styles.sideColumn} key={index}>
            {pair.map((item) => (
              <div className={styles.itemWrapper} key={item.id}>
                <img src={item.img} alt={item.name} className={styles.LearnItem} />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.LearnItemText}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}