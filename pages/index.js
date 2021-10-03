import { useState } from "react";
import Layout from "../components/Layout";
import {
  skills,
  learning,
  experiences,
  projects,
  languajes,
  education,
  certifications,
} from "../profile";
import Skill from "../components/Skill";
import Link from "next/link";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { Button, Collapse, Dropdown } from "react-bootstrap";
import Project from "../components/Project";
const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      {/**Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body main-banner">
            <div className="row">

              <div className="col-md-8">
                <Bounce top cascade>
                  <h3>Hi there!</h3>
                </Bounce>
                <div className="row">
                  <Bounce top cascade>
                    <div className="col-md-6">
                      <p>
                        Welcome to my own web portfolio. I&apos;m planning to
                        share here my skills, jobs experiences and projects.
                        It&apos;s always under construction, like life itself.
                      </p>
                      <p>
                        Sincerely I believe that have a huge variety of skills
                        that I have been developing across my career for solving
                        problems. Some of them are more mastered than others.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        I love to constantly learn and apply new knowledge.
                        Therefore, I made this web by myself, using React and Next
                        JS framework.
                      </p>
                      <div className="my-4 px-3 d-flex align-items-center">
                        <i className="fa fa-2x fa-map-marker mr-2"></i>
                        <h5 className="mx-2">
                          Living in Madrid, Spain<br></br>
                          From Santa Fe, Argentina
                        </h5>
                      </div>

                      <div className="d-flex w-auto">
                        <a
                          className="btn btn-light w-auto mx-2"
                          href="https://www.linkedin.com/in/lucas-eichhorn/"
                        >
                          Contact me!
                        </a>
                        <div className="dropdown show ml-3 w-auto mx-2">

                          <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              Download my CV
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="files/CV_Lucas_Eichhorn_2021_es.pdf" target="_blank">Spanish</Dropdown.Item>
                              <Dropdown.Item href="files/CV_Lucas_Eichhorn_2021_en.pdf">English</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>

                    </div>
                  </Bounce>
                </div>

              </div>

              <Zoom right>

                <div className="col-md-4">
                  <img
                    src="images/lucas-profile.png"
                    alt="Lucas Eichhorn profile picture"
                    className="img-fluid img-profile"
                  />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </header>
      {/**Second section */}
      <div className="mt-2 row content-wrapper">
        <div className="col-md-4">
          <div id="skills" className="mt-2 card bg-skills">
            <div className="card-body">
              <h1>
                <i className="fa fa-wrench txt-blue1"></i> <strong className="txt-blue1">Skills</strong>
              </h1>
              {skills.map((skill, i) => (
                <Skill skill={skill} type="skill" key={i} index={i} />
              ))}
            </div>
          </div>
          <div id="learning" className="mt-2 card bg-learning">
            <div className="card-body">
              <h1>
                <i className="fa fa-book txt-blue1"></i> <strong className="txt-blue1">Learning</strong>
              </h1>
              {learning.map((skill, i) => (
                <Skill skill={skill} key={i} type="learning" index={i} />
              ))}
            </div>
          </div>
          <div id="languages" className="mt-2 card bg-languajes">
            <div className="card-body">
              <h1>
                <i className="fa fa-language txt-blue1"></i> <strong className="txt-blue1">Languages</strong>
              </h1>
              {languajes.map(({ name, level }, i) => (
                <div key={i}>
                  <h4>{name}</h4>
                  <h5 className="pl-2"> {level}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          {/**Job Experience */}
          <div id="jobs" className="mt-2 col-md-12">
            <div className="row card bg-white-shadow">
              <div className="card-body">
                <h1>
                  <i className="fa fa-laptop"></i>
                  <strong>Job experiences</strong>
                </h1>
                <ul className="pl-1">
                  {experiences.map(
                    (
                      { company, skill, from, to, role, description, skills },
                      index
                    ) => (
                      <li key={index} className="job-item">
                        <Button
                          onClick={() =>
                            setOpen(open === index ? false : index)
                          }
                          aria-expanded={open === index}
                          aria-controls={`collapseJob-${index}`}
                          variant=""
                          className="btn-transparent"
                        >
                          <h3>
                            {company}
                            <i className="expand fa fa-angle-right"></i>
                          </h3>
                          <h5>{skill}</h5>
                          <p>
                            {role}: {from}-{to ? to : "Now"}
                          </p>
                        </Button>
                        {description && (
                          <Collapse in={open === index} className="pt-1 pb-4">
                            <div
                              className="pt-1 job-description"
                              id={`collapseJob-${index}`}
                            >
                              {description}
                              <p className="pt-2">Tech Stack: {skills} </p>
                            </div>
                          </Collapse>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/**Education */}
          <div id="education" className="mt-2 col-md-12">
            <div className="row card bg-white-shadow">
              <div className="card-body">
                <h1>
                  <i className="fa fa-graduation-cap"></i>
                  <strong>Education</strong>
                </h1>
                <ul className="pl-1">
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
            <div className="row card bg-white-shadow">
              <div className="card-body">
                <h1>
                  <i className="fa fa-trophy"></i>
                  <strong>Certifications</strong>
                </h1>
                <ul className="pl-1">
                  {certifications.map(({ title, subtitle, period }, index) => (
                    <li key={index}>
                      <h3>{title}</h3>
                      <h5>{subtitle}</h5>
                      <p>{period}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-2 row">
        {/**Portfolio*/}

        <div id="projects" className="mt-2 col-md-12">
          <div className="row card card-body bg-blue5">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
                <h5 className="text-center text-light">
                  Most of my projects were developed working for private
                  companies. Unluckily I cannot share them, but here you can check
                  some projects and even practical apps
                </h5>
              </div>
              {projects.map((project, i) => (
                <Project project={project} qty={projects.length} key={i} index={i} />
              ))}
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
    </Layout >
  );
};

export default Index;
