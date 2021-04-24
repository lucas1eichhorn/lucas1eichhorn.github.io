import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Error from './_error'
const GitHub = ({ user, statusCode }) => {
    console.log(user)
    if (statusCode) {
        return <Error statusCode={statusCode}/>
    }
    return (
        <Layout footer={false} dark={true} >
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="{user.name}" />
                        <p>{user.bio}</p>
                        <a href={user.blog} target="_blank" rel="noreferrer " className="btn btn-outline-secondary my-2">My blog</a>
                        <a href={useRouter.html_url} target="_blank" rel="noreferrer "className="btn btn-outline-secondary">Go to GitHub!</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/lucas1eichhorn')
    const data = await res.json();
    console.log(data);
    const statusCode = res.status > 200 ? res.status : false;
    return {
        props: {
            user: data,
            statusCode
        }
    }
}
export default GitHub;