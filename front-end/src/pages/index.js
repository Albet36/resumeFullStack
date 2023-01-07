import Head from "next/head";
import NavBar from "../sections/navBar";
import Banner from "../sections/banner";
import AboutMe from "../sections/aboutMe";
import Education from "../sections/education";
import Experience from "../sections/experience";
import Skills from "../sections/skills";
import Modal from "../components/modal";
import { Contexto } from "../appContext";
import { useContext } from "react";
import Target from "../sections/target";
import Project from "../sections/project";
import CareAbout from "../sections/careAbout";

export default function Home() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const closeNavRes = () => {
    if (navResOpen) {
      setNavResOpen(() => false);
    }
  };
  return (
    <>
      <Head>
        <title>Dao Duy Quang</title>
        <link rel="image_src" href="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/322394377_1210783263166959_1025402924405435198_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=n8IBCAfAzD8AX-gnR7T&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfDS3-i46Yzjt0SdHL8axGJQwv5GTaDt_dX2qEBDUCG-Hg&oe=63BD417C" />
        <meta
          name="description"
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me."
        />
        <meta property="og:title" content="Dao Duy Quang" />
        <meta property="og:site_name" content="Dao Duy Quang" />
        <meta property="og:url" content="https://franciscopantojag.me" />
        <meta
          property="og:description"
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/322394377_1210783263166959_1025402924405435198_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=n8IBCAfAzD8AX-gnR7T&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfDS3-i46Yzjt0SdHL8axGJQwv5GTaDt_dX2qEBDUCG-Hg&oe=63BD417C"
        />
        <meta property="og:image:width" content="1580"/>
        <meta property="og:image:height" content="790"/>
        <meta name="twitter:image" content="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/322394377_1210783263166959_1025402924405435198_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=n8IBCAfAzD8AX-gnR7T&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfDS3-i46Yzjt0SdHL8axGJQwv5GTaDt_dX2qEBDUCG-Hg&oe=63BD417C"/>
      </Head>
      <Modal />
      <NavBar />
      <main onClick={closeNavRes}>
        <Banner />
        <AboutMe />
        <Target />
       
        <section className="container">
        <div className="containerCont rowFlexRes breakExpEduc">
          <Experience />
          <Education />
          </div>
      </section>
      <section className="container">
      <div className="containerCont rowFlexRes breakExpEduc">
        <Project />
        <CareAbout />
        </div>
    </section>
        <div id="skills" className="target"></div>

        <Skills />
      </main>
    </>
  );
}
