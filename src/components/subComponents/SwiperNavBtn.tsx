import styles from "../../styles/Next.module.css";
import { useSwiper } from "swiper/react";

const SwiperNavBtn = () => {
  const swiper = useSwiper();

  return (
    <>
      <aside className={styles.navigation}>
        <button onClick={() => swiper.slidePrev()}>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f5f5f5"
          >
            <title />
            <g data-name="Layer 2" id="Layer_2">
              <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z" />
            </g>
          </svg>
        </button>
        <button onClick={() => swiper.slideNext()}>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f5f5f5"
          >
            <title />
            <g data-name="Layer 2" id="Layer_2">
              <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
            </g>
          </svg>
        </button>
      </aside>
    </>
  );
};

export default SwiperNavBtn;
