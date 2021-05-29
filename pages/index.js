import { useState } from 'react';
import Layout from '../components/Layout'
import { skills, learning, experiences, projects, languajes, education, certifications } from '../profile'
import Skill from '../components/Skill';
import Link from 'next/link';
import { Button, Collapse } from 'react-bootstrap';
const Index = () => {
    const [open, setOpen] = useState(false);
    return (
        <Layout>
            {/**Header Card */}
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body main-banner bg-secondary text-light">
                        <div className="row">

                            <div className="col-md-8">
                                <h1>Lucas Eichhorn</h1>
                                <h3>Engineer & FullStack Developer</h3>
                                <p>
                                    Hi there! Welcome to my own web portfolio. Im planning to share here my skills, jobs experiences and projects.
                                    </p>
                                <p>I made it by myself, using React and Next JS framework.
                            </p>
                                <p>
                                    <i className="fa fa-map-marker"></i> &nbsp; Santa Fe, Argentina
                            </p>
                                <a className="btn btn-light" href="https://www.linkedin.com/in/lucas-eichhorn/">Contact me!</a>
                                <a className="btn btn-secondary" href="files/CV_Lucas_Eichhorn_2021.pdf" target="_blank">Download my CV <i className="fa fa-download"></i></a>

                            </div>
                            <div className="col-md-4">
                                <img src="images/lucas-profile.png" alt="Lucas Eichhorn profile picture" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/**Second section */}
            <div className="mt-2 row">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1><i className="fa fa-wrench"></i> <strong>Skills</strong></h1>
                            {
                                skills.map((skill, i) => (<Skill skill={skill} key={i} index={i} />))
                            }

                        </div>
                    </div>
                    <div className="mt-2 card bg-light">
                        <div className="card-body">
                            <h1><i className="fa fa-book"></i> <strong>Learning</strong></h1>
                            {
                                learning.map((skill, i) => (<Skill skill={skill} key={i} />))
                            }

                        </div>
                    </div>
                    <div className="mt-2 card bg-light">
                        <div className="card-body">
                            <h1><i className="fa fa-language"></i> <strong>Languages</strong></h1>
                            {languajes.map(({ name, level }, i) => (
                                <div key={i}>
                                    <h5>{name}</h5>
                                    <p> {level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-8">



                    {/**Job Experience */}
                    <div className="mt-2 col-md-12">
                        <div className="row card bg-light">
                            <div className="card-body">
                                <h1><i className="fa fa-laptop"></i><strong>Job experiences</strong></h1>
                                <ul className="pl-4">
                                    {experiences.map(({ company, skill, from, to, role, description }, index) => (
                                        <li key={index} className="job-item">
                                            <Button
                                                onClick={() => setOpen(open === index ? false : index)}
                                                aria-expanded={open === index}
                                                aria-controls={`collapseJob-${index}`}
                                                variant="light"
                                            >
                                                <h3>
                                                    {company}
                                                    <i className="expand fa fa-angle-right"></i>
                                                </h3>
                                                <h5>{skill}</h5>
                                                <p>{role}: {from}-{to ? to : 'Now'}</p>
                                            </Button>
                                            {description &&
                                                <Collapse in={open === index} className="pt-1 pb-4">
                                                    <div className="pt-1 job-description" id={`collapseJob-${index}`}>
                                                        {description}
                                                    </div>
                                                </Collapse>
                                            }
                                        </li>
                                    ))}

                                </ul>
                                <Link href="/experiences">
                                    <a className="btn btn-light">Know More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/**Education */}
                    <div className="mt-2 col-md-12">
                        <div className="row card bg-light">
                            <div className="card-body">
                                <h1><i className="fa fa-graduation-cap"></i><strong>Education</strong></h1>
                                <ul className="pl-4">
                                    {education.map(({ title, subtitle, period }, index) => (
                                        <li key={index}>
                                            <h3>{title}</h3>
                                            <h4>{subtitle}</h4>
                                            <p>{period}</p>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/**Certifications */}
                    <div className="mt-2 col-md-12">
                        <div className="row card bg-light">
                            <div className="card-body">
                                <h1><i className="fa fa-trophy"></i><strong>Certifications</strong></h1>
                                <ul className="pl-4">
                                    {certifications.map(({ title, subtitle, period }, index) => (
                                        <li key={index}>
                                            <h3>{title}</h3>
                                            <h4>{subtitle}</h4>
                                            <p>{period}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/**Portfolio */}

                    <div className="mt-2 col-md-12">

                        <div className="row card card-body bg-dark">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center text-light">Portfolio (pending...)</h1>
                                </div>
                                {
                                    projects.map(({ name, description, image }, index) => (
                                        <div className="col-md-4 p-2" key={index}>
                                            <div className="card h-100">
                                                <div className="overflow">
                                                    <img src={`images/${image}`} alt={name} className="card-img-top" />
                                                </div>
                                                <div className="card-body">
                                                    <h3>{name}</h3>
                                                    <p>{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="text-center mt-4">
                                    <Link href="/portfolio">
                                        <a className="btn btn-outline-light">More projects</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Index;