import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Error from "./_error";
import Link from "next/link";
import { getInfoGitHub, getProjectsGitHub } from "../helpers/functions";
const GitHub = () => {
  const [user, setUser] = useState({});
  const [statusCode, setStatusCode] = useState();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getInfoGitHub()
      .then((response) => {
        console.log(response);
        setUser(response.user);
        setStatusCode(response.statusCode);
      })
      .catch((error) => {
        console.log(error);
      });
    /*list projects*/
    getProjectsGitHub()
      .then((response) => {
        console.log("PROJECTS:", response);
        setProjects(response.projects);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout footer={false} dark={true} menu={false}>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body text-center">
            <div className="row">
              <div className="col-md-6">

                <h1>{user.name}</h1>
                <h3>{user.login}</h3>
                <img
                  className="rounded-circle"
                  src={user.avatar_url}
                  alt={user.name}
                  style={{ 'width': '200px' }}
                />
                <p>{user.bio}</p>
                <Link href="/">
                  <a
                    rel="noreferrer"
                    className="mr-2 btn btn-outline-secondary"
                  >
                    <i className="fa fa-chevron-left"></i> Back to profile
                  </a>
                </Link>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Go to GitHub!
                </a>

              </div>

              <div className="col-md-6 text-left mt-5">

                <ul>
                  {projects.map((project, i) => (
                    <li key={i}>

                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="py-1 text-secondary"
                      >
                        <i className="fa fa-chevron-right pr-2"></i>{project.name}
                      </a>
                    </li>
                  ))}

                </ul>

              </div>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  );
};

export default GitHub;
