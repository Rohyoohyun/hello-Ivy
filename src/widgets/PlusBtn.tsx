import { useNavigate } from 'react-router-dom';
import styles from '@/shared/css/PlusBtn.module.css';
import { IoIosArrowForward } from "react-icons/io";

type PlusBtnProps = {
  text: string;
  to: string;  // 이동할 경로
};

export default function PlusBtn({ text, to }: PlusBtnProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };  

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.container}
      aria-label={`Go to ${to}`}
    >
      {text} &nbsp;
      <IoIosArrowForward />
    </button>
  );
}