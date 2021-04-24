const Skill = ({ skill }) => (
    <div className="py-3">
        <h5>{skill.skill}</h5>
        <div className="progress">
            <div className="progress-bar" role="progressbard" style={{ width: `${skill.percentage}%` }}> </div>
        </div>
    </div>
)

export default Skill
