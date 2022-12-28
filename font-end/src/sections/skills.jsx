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
    const mainTechSkills = list.filter(val1 => val1.category?.includes('mainTech'));
    const softSkills = list.filter(val2 => val2.Category?.includes('softt'));
    console.log(list);
    const softWareSkills = list.filter(val3 => val3.category?.includes('software'));
    const overallSkills = list.filter(val3 => val3.category?.includes('overallCir'));
    // console.log(softSkill);
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

                <Skill skill={mainTechSkills} />

              </ul>
            </div>
          </div>
          <div className="cardContainer">
            <div className="card">
              <h3>Overall</h3>
              <ul className="rowFlexRes breakOverall">

                <CircularProg skill={overallSkills} />

              </ul>
              
              
                <li>

                  <ul className="rowFlexRes">
                    {
                      softSkills && softSkills.map(itm => {return(
                        <li>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{itm?.name}</span>
                      </li>
                      )})
                    }
                  
                  </ul>
                </li>
              
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <h3>Software</h3>
            <ul>

              <Skill skill={softWareSkills} />

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
