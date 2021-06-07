import { useState } from 'react';
import Layout from '../components/Layout'
import { skills, learning, experiences, projects, languajes, education, certifications } from '../profile'
import Skill from '../components/Skill';
import Link from 'next/link';
import { Button, Collapse } from 'react-bootstrap';
import Project from '../components/Project';
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
                              
                                <h3>Hi there!</h3>
                                <p>
                                     Welcome to my own web portfolio. I&apos;m planning to share here my skills, jobs experiences and projects.
                                </p>
                                <p>
                                    Sincerely I believe that have a huge variety of skills that I have been developing across my career for solving problems. Some of them are more mastered than others.
                                </p>
                                <p>
                                    I love to constantly learn and apply new knowledge. Therefore, I made this web by myself, using React and Next JS framework.
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
                    <div id="skills" className="card bg-light">
                        <div className="card-body">
                            <h1><i className="fa fa-wrench"></i> <strong>Skills</strong></h1>
                            {
                                skills.map((skill, i) => (<Skill skill={skill} key={i} index={i} />))
                            }

                        </div>
                    </div>
                    <div id="learning" className="mt-2 card bg-light">
                        <div className="card-body">
                            <h1><i className="fa fa-book"></i> <strong>Learning</strong></h1>
                            {
                                learning.map((skill, i) => (<Skill skill={skill} key={i} index={i} />))
                            }

                        </div>
                    </div>
                    <div id="languages" className="mt-2 card bg-light">
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
                    <div id="jobs" className="mt-2 col-md-12">
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
                                
                            </div>
                        </div>
                    </div>
                    {/**Education */}
                    <div id="education" className="mt-2 col-md-12">
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
                    <div id="certifications" className="mt-2 col-md-12">
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

                    <div id="projects" className="mt-2 col-md-12">

                        <div className="row card card-body bg-dark">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center text-light">Portfolio</h1>
                                    <h5 className="text-center text-light">Most of my projects were developed working for private companies, so I cannot share them. But here you can check some and even practical apps</h5>
                                </div>
                                {
                                    projects.map((project, i) => (
                                        <Project project={project} key={i} index={i} />
                                    ))
                                }

                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center mt-4">
                                    <Link href="/github">
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