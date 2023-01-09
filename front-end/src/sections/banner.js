import styles from '../styles/banner.module.css';
import Linkedin from '../svg/facebook.js';
import Github from '../svg/github.js';
import { useContext, useEffect } from 'react';
import { Contexto } from '../appContext';
import { useDispatch, useSelector } from 'react-redux';
import { getDataMe } from '../redux/meData.slice';
import Facebook from '../svg/facebook.js';

export default function Banner() {
  const { setIsOpen } = useContext(Contexto);
  const { data, loading } = useSelector((state) => ({ ...state.meData }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMe());
  }, []);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className={`container ${styles.banner}`}>
      {data &&
        data.map((item) => {
          return (
            <div className={`containerCont ${styles.bannerCont}`}>
              <section className={styles.bannerContLeft}>
                <h2>
                  Hi there{' '}
                  <span role="img" aria-label="hello">
                    👋
                  </span>
                  , I'm
                </h2>
                <h1>{item.name}</h1>
                <h2>
                  <span className={styles.brH2}>
                    <br />
                  </span>{' '}
                  {item.positionDeal}
                </h2>
                <h3>REACT / NEXTJS</h3>
                <h3>{item.address}</h3>
                <h3>
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </h3>
                <div className={`${styles.buttons}`}>
                  <div>
                    <button className={`${styles.but}`}>
                      <a
                        target="_blank"
                        href="/pdf/cv_me.pdf"
                      >
                        DOWNLOAD RESUME
                      </a>
                    </button>
                    <button className={`${styles.svgBut}`}>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/quangdevops/"
                      >
                        <Facebook />
                      </a>
                    </button>
                    <button className={`${styles.svgBut}`}>
                      <a target="_blank" href="https://github.com/Albet36">
                        <Github />
                      </a>
                    </button>
                  </div>

                  <button onClick={openModal} className={`${styles.but}`}>
                    CONTACT ME
                  </button>
                </div>
              </section>
              <figure className={styles.bannerContRight}>
                <img
                  alt="Dao Duy Quang"
                  width="300px"
                  height="400px"
                  src="/images/profile.jpg"
                />
              </figure>
            </div>
          );
        })}
    </section>
  );
}
