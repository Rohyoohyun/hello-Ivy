import { useState, useEffect } from 'react';
import styles from '@/shared/css/Home/MyDesigner.module.css';

const topics = [
  {
    id: 0,
    title: (
      <>
        PART 1. <br />
        디자인은{' '}<br />
        <span style={{ fontWeight: 600 }}>문제 해결</span>에서 시작된다
      </>
    ),
    content: (
      <>
        처음 디자인을 배웠을 땐 <span style={{ fontWeight: 600 }}>보기 좋게 만드는 것</span>이 전부라고 생각했습니다.<br />
        하지만 프로젝트를 경험하면서 점점 생각이 바뀌었습니다.<br /><br />

        디자인은 예쁜 것보다 <span style={{ fontWeight: 600 }}>목적을 이루는 것</span>이 더 중요하다는 걸 느꼈습니다.<br />
        예를 들어 어떤 버튼이 아무리 예쁘더라도,<br />
        사용자가 그걸 못 찾는다면 의미가 없잖아요?<br /><br />

        그래서 저는 디자인을 시작할 때, ‘지금 어떤 문제가 있는지’, ‘어떤 불편함을 해결해야 하는지’를 먼저 정의하려고 합니다.<br />
        겉모습보다는 무엇을 어떻게 해결할 것인가에 더 초점을 맞춥니다.
      </>
    ),
  },
  {
    id: 1,
    title: (
      <>
        PART 2. <br />
        디자인은<br />
        결국{' '}<span style={{ fontWeight: 600 }}>사용자 중심</span>이어야 한다
      </>
    ),
    content: (
      <>
        제가 디자인을 할 때 가장 자주 던지는 질문은 <br />
        “이걸 누가 쓸까?”, “어떤 상황에서 필요할까?”입니다.<br />
        디자인은 결과물 자체보다, 그걸 누가 어떻게 쓰는지가 더 중요하다고 생각합니다.<br /><br />

        그래서 <span style={{ fontWeight: 600 }}>사용자의 입장</span>에서 계속 고민하고,<br />
        직접 써보거나 주변 피드백을 들어보는 과정을 꼭 거치려고 합니다.<br /><br />

        UI든 포스터든, 목적이 ‘정보 전달’이라면 <br />
        그 정보가 빠르게, 정확하게, 자연스럽게 전해지도록 시각적으로 설계해야 하니까요.<br />
        저는 그런 사용자 중심의 시각 흐름과 구조를 잡는 일을 중요하게 생각합니다.
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        PART 3. <br />
        좋은 디자인은<br />
        <span style={{ fontWeight: 600 }}>반복과 개선</span>으로 완성된다
      </>
    ),
    content: (
      <>
        좋은 디자인은 한 번에 완성된다고 생각하지 않아요.<br />
        처음엔 미완성처럼 보여도,<br />
        피드백을 듣고 수정하면서 점점 더 좋아지는 과정이 진짜 디자인이라고 생각합니다.<br /><br />

        그래서 저는 개인 작업에서도 자주 사용자 테스트를 하거나,<br />
        직접 써보고 문제점을 찾아내는 연습을 많이 합니다.<br /><br />

        수정하고 다듬는 과정을 귀찮게 여기기보다,<br />
        오히려 그걸 통해 더 나은 방향을 찾는 재미를 느끼는 편입니다.<br />
        결국 디자인은 나 혼자 만족하는 게 아니라,<br />
        <span style={{ fontWeight: 600 }}>사용자와 목적에 맞게 완성</span>되어야 더 좋은 디자인이라 할 가치가 있다고 믿습니다.
      </>
    ),
  },
];
export default function MyDesigner() {
  const [selected, setSelected] = useState(0);
  const [init, setInit] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % topics.length);
      setInit(false);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (id: number) => {
    if (id !== selected) {
      setSelected(id);
      setInit(false);
    }
  };

  return (
    <div className={styles.contentWrapper}>
      <p className={styles.TextStyle}>
        <span className={styles.PointText}>좋은디자인</span>은 어떻게 만들어질까?
      </p>
      <div className={styles.container}>
        <div className={styles.topicList}>
          {topics.map(({ id, title }) => (
            <p
              key={id}
              className={`${styles.topic} ${selected === id ? styles.activeTopic : ''}`}
              onClick={() => handleClick(id)}
            >
              {title}
            </p>
          ))}
        </div>

        <div className={`${styles.TextCardContent} ${!init ? styles.fadeIn : ''}`}>
          {topics[selected].content}
        </div>
      </div>
    </div>
  );
}