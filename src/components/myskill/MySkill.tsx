import "./myskill.scss";
import { skillButtons } from "../../data";
import { useState } from "react" ; 

function MySkill() {
    const [id , setId] = useState(-1)
    return (
    <div className="mySkill">
      <h1 className="title">My Skills</h1>
      <div className="skills">
        {skillButtons.map((item) => (
          <div className="imgContainer" key={item.id} onMouseEnter={() => {
            setId(item.id)
        }} onMouseLeave={() => {
            setId(-1)
        }}>
            <div className="item">
              <svg 
                style={id === item.id ? {fill: item.fill} : {fill: "grey"} } 
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              > 
                <path d={item.svgpath} />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkill;
