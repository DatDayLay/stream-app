import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useContext } from "react";
import {
  Keyboard,
  Pagination,
  Navigation,
  A11y,
  Autoplay,
} from "swiper/modules";

import { GlobalContext } from "../context/context";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactPlayer from "react-player";
import styles from "../styles/Next.module.css";
import SwiperNavBtn from "./subComponents/SwiperNavBtn";

interface NextProps {
  title: string;
  id: number;
}

const Next: React.FC<NextProps> = ({ title, id }) => {
  const { movies, isDesktop } = useContext(GlobalContext);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [clickedId, setClickedId] = useState<number | null>(null);

  const handleClick = (id: number | null) => {
    setClickedId(id);
  };
  return (
    <div className={styles.next}>
      <h3>
        {title}{" "}
        <svg
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
          fill="#f5f5f5"
        >
          <path d="M20 12l-2.83 2.83 9.17 9.17-9.17 9.17 2.83 2.83 12-12z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      </h3>
      <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },

            481: {
              slidesPerView: 2,
            },

            769: {
              slidesPerView: 3,
            },

            1025: {
              slidesPerView: 4,
            },

            1201: {
              slidesPerView: 4,
            },
            2000: {
              slidesPerView: 6,
            },
          }}
          modules={[Keyboard, Pagination, Navigation, A11y, Autoplay]}
          className={styles.swiper}
          // id={`${id}`}
        >
          <>
            {movies.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className={styles.slide}
                onMouseEnter={() => setHoveredId(movie.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <main key={movie.id}>
                  <img src={movie.thumbnail_vertical} alt="" />
                  {hoveredId === movie.id && (
                    <article>
                      <aside>
                        <svg
                          viewBox="0 0 30 30"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          onClick={() => handleClick(movie.id)}
                        >
                          <title />
                          <g data-name="Layer 2" id="Layer_2">
                            <g id="Interface-Solid">
                              <g id="interface-solid-multimedia-play-button-1">
                                <path
                                  d="M15,2.5A12.5,12.5,0,1,0,27.5,15,12.51408,12.51408,0,0,0,15,2.5Zm4.96777,14.13965v.001L14.32129,20.582a2.0003,2.0003,0,0,1-3.14453-1.64062V11.05859A2.0003,2.0003,0,0,1,14.32129,9.418l5.64648,3.94141a2,2,0,0,1,0,3.28027Z"
                                  fill="none"
                                />
                                <path d="M15,0A15,15,0,1,0,30,15,15.01641,15.01641,0,0,0,15,0Zm0,27.5A12.5,12.5,0,1,1,27.5,15,12.51408,12.51408,0,0,1,15,27.5Z" />
                                <path d="M19.96777,13.35938,14.32129,9.418a2.0003,2.0003,0,0,0-3.14453,1.64062v7.88282A1.99947,1.99947,0,0,0,14.32129,20.582l5.64648-3.94141v-.001a2,2,0,0,0,0-3.28027Z" />
                              </g>
                            </g>
                          </g>
                        </svg>
                        <svg
                          height="48"
                          viewBox="0 0 48 48"
                          width="48"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          onClick={() => handleClick(movie.id)}
                        >
                          <path d="M0 0h48v48h-48z" fill="none" />
                          <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z" />
                        </svg>
                      </aside>
                      <h2 className={styles.previewTitle}>{movie.title}</h2>
                      <h3>
                        {movie.rating} | <span> {movie.duration_minutes}m</span>
                      </h3>
                      <h5>{movie.genre.join(" | ")}</h5>
                    </article>
                  )}
                </main>
                <div className="swiper-pagination"></div>
              </SwiperSlide>
            ))}
          </>
          {isDesktop && <SwiperNavBtn />}
        </Swiper>
      </section>
      {clickedId && (
        <>
          {movies
            .filter((film) => film.id === clickedId)
            .map((film) => (
              <div className={styles.overlay} key={film.id}>
                <div className={styles.modal}>
                  <h1>{film.title}</h1>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.cancel}
                    onClick={() => handleClick(null)}
                  >
                    <title />
                    <path
                      d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z"
                      fill="#f5f5f5"
                    />
                  </svg>
                  <ReactPlayer
                    className="player"
                    loop={true}
                    playing={true}
                    muted={true}
                    url="https://youtu.be/wyiZWYMilgk?si=QRdokc7BiH1A-Rhh"
                    width={"90%"}
                    height={"60%"}
                    controls={true}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <button>
                    <svg
                      height="12px"
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 512 512"
                      width="12px"
                      fill=""
                    >
                      <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" />
                    </svg>
                    Watch Now{" "}
                  </button>
                  <section className={styles.details}>
                    <sub className={styles.sub1}>
                      <h4>
                        {film.rating}
                        <span>
                          . {film.release_year} . {film.duration_minutes}m
                        </span>
                      </h4>
                      <h5>{film.synopsis}</h5>
                    </sub>
                    <sub className={styles.sub2}>
                      <p>Cast</p>
                      <ul>
                        {film.cast.map((member, index) => (
                          <li key={index}>
                            {member.name} as {member.role}
                          </li>
                        ))}
                      </ul>
                      <h5>
                        <span>Genres: </span>
                        {film.genre.join(" , ")}
                      </h5>
                    </sub>
                  </section>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Next;
