import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataMe } from "../redux/meData.slice";

export default function Skills() {
  const { data, loading } = useSelector((state) => ({ ...state.meData }));
  // const [list, setList] = useState("");
  let list = [];
  const dispatch = useDispatch();
  
  const loaddingData = async() =>{
 dispatch(getDataMe());
  }
  useEffect(() => {
    loaddingData()
  }, []);

   data && data?.map(item => item.skillbar.map(val => list.push(val)));
    const softSkills = list && list.find(val3 => val3.category === 'soft'); 
  // let softSkills = '';
  //  console.log(softSkills); 
    // console.log(list.find(val1 => val1.category === 'mainTech'));
  return (
    <section className="container">
      <div className="containerCont sectionCont  sectionContSkills">
        <header>
          <h2>Skills</h2>
        </header>
        <div className="rowFlexRes breakMainTechOverall">
          <div className="cardContainer">
            <div className="card">
              <h3>Main Tech</h3>
              <ul>

                <Skill skill={list.find(val1 => val1.category === 'mainTech')} />

              </ul>
            </div>
          </div>
          <div className="cardContainer">
            <div className="card">
              <h3>Overall</h3>
              <ul className="rowFlexRes breakOverall">

                <CircularProg skill={list.find(val2 => val2.category === 'overallCir')} />

              </ul>
              <ul>
                <li>

                </li>
                <li>
                  <ul className="rowFlexRes">
                    <li>
                      <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                      <span style={{ opacity: "0.9" }}>{softSkills?.name}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <h3>Software</h3>
            <ul>

              <Skill skill={list && list.find(val4 => val4.category === 'software')} />

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
