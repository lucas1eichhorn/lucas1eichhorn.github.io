import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import styles from './Skill.module.sass'

const Skill = ({ skill, index }) => {
    const [open, setOpen] = useState(false);
    return (

        <div >
            <Button
                className={styles.toggle_skill}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                variant="light"
            >
                <div className="py-3 text-left">
                    <h5>{skill.skill}</h5>
                </div>
                <div className={styles.progress_container}>
                    <div className={`progress ${styles.progress}`}>
                        <div className="progress-bar" role="progressbar" style={{ width: `${skill.percentage}%` }}> </div>
                    </div>
                    {skill.subskills &&
                        <i className="ml-1 fa fa-angle-down"></i>}
                </div>

            </Button>
            {skill.subskills &&
                <Collapse in={open}>
                    <div className="pt-1" id={`collapseSkill-${index}`}>
                        {skill.subskills &&
                            <ul className="mb-0">

                                {skill.subskills.map((item, index) => (
                                    <li key={index}> {item}</li>
                                ))}


                            </ul>}

                    </div>
                </Collapse>}
        </div >

    )
}

export default Skill
