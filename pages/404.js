import Layout from "../components/Layout"
import Link from 'next/link'
const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>Error 404</h1>
            <p>This page dones not exists. Please return to
            <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
        </div>
    </Layout>
)



export default custom404