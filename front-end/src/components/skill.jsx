import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const  Skill = ({ skill }) => {
   return (
    <li>
  {
    // typeof skill === 'undefined' ? (null) : (
    //   <>
    //       <div className="rowFlexRes">
    //     <span>{skill?.name}</span>
    //     <span>
    //       {skill?.progress}
    //       {"%"}
    //     </span>
    //   </div>
    //   <div>
    //     <ProgressBar
    //       completed={skill?.progress}
    //       bgcolor={"var(--red)"}
    //       baseBgColor={"rgba(233, 233, 233, 0.8)"}
    //       width={"100%"}
    //       height={"0.5rem"}
    //       labelSize={"0"}
    //     />
    //   </div>
    //   </>
    // )
    skill && skill.map(item => {
      return(
        <>
          <div className="rowFlexRes" style={{margin:'10px 0'}} key={item.name}>
        <span>{item?.name}</span>
        <span>
          {item?.progress}
          {"%"}
        </span>
      </div>
      <div>
        <ProgressBar
          completed={item?.progress}
          bgcolor={"var(--red)"}
          baseBgColor={"rgba(233, 233, 233, 0.8)"}
          width={"100%"}
          height={"0.5rem"}
          labelSize={"0"}
        />
      </div>
      </>
      )
    })
  }
    </li>
  );
}
export default Skill;