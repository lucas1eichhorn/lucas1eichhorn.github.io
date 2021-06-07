import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Error from "./_error";
import Link from "next/link";
import { getInfoGitHub } from "../helpers/functions";
const GitHub = () => {
  const [user, setUser] = useState({});
  const [statusCode, setStatusCode] = useState();

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
  }, []);

  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout footer={false} dark={true} menu={false}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img
              className="rounded-circle"
              src={user.avatar_url}
              alt={user.name}
            />
            <p>{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Go to GitHub!
            </a>
            <Link href="/">
              <a
                rel="noreferrer"
                className="mt-2 btn btn-outline-secondary"
              >
                <i className="fa fa-chevron-left"></i> Back to profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GitHub;
