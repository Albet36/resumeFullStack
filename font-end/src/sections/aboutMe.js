import { useContext, useEffect } from 'react';
import { Contexto } from '../appContext';
import { useDispatch, useSelector } from "react-redux";
import { getDataMe } from '../redux/meData.slice';
export default function AboutMe() {
  const { setIsOpen } = useContext(Contexto);
  const { data,loading } = useSelector((state) => ({ ...state.meData }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMe());
  }, []);


  if (loading) {
    return <h2>Loading...</h2>;
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className="container">
   {
    data && data.map(item => {
      return(
        <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>about me</h2>
          <h3>
            Hi! My name is {item.name},{' '}
            <span className="colorRed">Web Developer</span>
          </h3>
        </header>

        <p>
        {item.about}
        </p>
        <p>
          I am very passionate  to my work, i have plenty of
          problem solving, communication  and I'm 
          good at teamwork. You can get in touch with me by filling this{' '}
          <strong>
            <a onClick={openModal}>📄form</a>
          </strong>
          , or you can send me an email to
          <br />
          <strong>
            <a href={`mailto:${item.email}`}>📧{item.email}</a>
          </strong>
          ; also you are more than welcome to follow my work on my{' '}
          <strong>
            <a target="_blank" href="https://github.com/Albet36">
              github
            </a>
          </strong>{' '}
          and visit my{' '}
          <strong>
            <a
              target="_blank"
              href="https://www.facebook.com/quangdevops/"
            >
              facebook
            </a>
          </strong>{' '}
          profile.
        </p>
      </div>
      )
    })
   }
    </section>
  );
}
