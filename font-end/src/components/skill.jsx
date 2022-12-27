import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const  Skill = ({ skill }) => {
  // console.log(skill.toString());
   return (
    <li>
  {
    typeof skill === 'undefined' ? (null) : (
      <>
          <div className="rowFlexRes">
        <span>{skill?.name}</span>
        <span>
          {skill?.progress}
          {"%"}
        </span>
      </div>
      <div>
        <ProgressBar
          completed={skill?.progress}
          bgcolor={"var(--red)"}
          baseBgColor={"rgba(233, 233, 233, 0.8)"}
          width={"100%"}
          height={"0.5rem"}
          labelSize={"0"}
        />
      </div>
      </>
    )
  }
    </li>
  );
}
export default Skill;