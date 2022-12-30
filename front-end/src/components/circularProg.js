import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function circularProg({ skill }) {
  return (
   <>
    {
      skill && skill.map(item => {return(
        <li className="circleSkillContainer" style={{margin:5}}>
        
        <div>
        <CircularProgressbar
          value={item.progress}
          text={`${item.progress}%`}
        />
      </div>
      <div>{item.name}</div>
      </li>
      
      )})
    }
   </>
  );
}
