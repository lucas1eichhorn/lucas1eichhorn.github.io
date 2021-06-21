import { Button } from "react-bootstrap";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import styles from "./Skill.module.sass";
import classNames from "classnames";

const Skill = ({ skill, type, index }) => {
  const [open, setOpen] = useState(false);
  console.log("type",type);
  // a random int to choose classname
  const classRandomInt = ((index + 10) % 3) + 1;
  return (
    <div className="pb-2">
      <Button
        className={`${styles.toggle_skill}  ${classNames({
          [`${styles.empty}`]: !skill.subskills,
          [`${styles.learning}`]: type==="learning"
        })}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        variant="light"
      >
        <div className="text-left" style={{ width: "fit-content" }}>
          <h5
            className={classNames({
              [`${styles.typing}`]: true,
              [`${styles.anim1}`]: classRandomInt === 1,
              [`${styles.anim2}`]: classRandomInt === 2,
              [`${styles.anim3}`]: classRandomInt === 3,
            })}
          >
            {skill.skill}
          </h5>
        </div>
        <div className={styles.progress_container}>
          <div className={`progress ${styles.progress}`}>
            <div
              className={`progress-bar ${styles.progress_bar}`}
              role="progressbar"
              style={{ width: `${skill.percentage}%` }}
            >
              <div className={`${styles.color}`}></div>
            </div>
          </div>
          {skill.subskills && <i className="ml-1 fa fa-angle-down"></i>}
        </div>
      </Button>
      {skill.subskills && (
        <Collapse in={open}>
          <div className="pt-1" id={`collapseSkill-${index}`}>
            {skill.subskills && (
              <ul className="mb-0">
                {skill.subskills.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            )}
          </div>
        </Collapse>
      )}
    </div>
  );
};

export default Skill;
