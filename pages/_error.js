import Layout from "../components/Layout"

const _error = ({ statusCode }) => {
    return (
        <Layout>
            {
                statusCode ? (
                    < p className="text-center">Could not load my GitHub page. Status Code {statusCode}</p>
                ) : (

                    <p className="text-center">Could not load my GitHub page</p>
                )
            }
        </Layout >
    )
}

export default _error;
