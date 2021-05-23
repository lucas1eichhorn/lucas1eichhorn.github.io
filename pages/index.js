import { useState } from 'react';
import Layout from '../components/Layout'
import { skills, learning, experiences, projects } from '../profile'
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
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="images/lucas-profile.jpg" alt="Lucas Eichhorn profile picture" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h1>Lucas Eichhorn</h1>
                                <h3>FullStack Developer</h3>
                                <p>
                                    Hi there! Welcome to my own web portfolio. Im planning to share here my skills, jobs experiences and projects. And yes, I made it by myself, using React and Next JS framework.
                            </p>
                                <a className="btn btn-light" href="https://www.linkedin.com/in/lucas-eichhorn/">Contact me!</a>
                                <a className="btn btn-secondary" href="files/CV_Lucas_Eichhorn_2021.pdf" target="_blank">Download my CV <i className="fa fa-download"></i></a>

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
                            <h1>Skills</h1>
                            {
                                skills.map((skill, i) => (<Skill skill={skill} key={i} index={i} />))
                            }

                        </div>
                    </div>
                    <div className="mt-2 card bg-light">
                        <div className="card-body">
                            <h1>Learning</h1>
                            {
                                learning.map((skill, i) => (<Skill skill={skill} key={i} />))
                            }

                        </div>
                    </div>
                </div>
                <div className="col-md-8">



                    {/**Job Experience */}
                    <div className="mt-2 col-md-12">
                        <div className="row card bg-light">
                            <div className="card-body">
                                <h1>Job experiences</h1>
                                <ul className="pl-4">
                                    {experiences.map(({ company, skill, from, to, role, description }, index) => (
                                        <li key={index} className="job-item">
                                            <Button
                                                onClick={() => setOpen(open===index?false:index)}
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
                                                    <div className="pt-1" id={`collapseJob-${index}`}>
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