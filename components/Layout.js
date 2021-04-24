import Footer from './Footer'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import classNames from 'classnames'
const Layout = ({ children, footer = true, dark = false }) => {
    const router = useRouter()
    useEffect(() => {
        console.log("cargo")
        const handleRouteChange = url => {
            console.log(url)
            NProgress.start()
        };
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', () => NProgress.done())
        return () => {
            return router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])
    return (
        <div className={classNames({ 'bg-dark': dark })}>

            <Navbar />
            <main className="container py-4">
                {children}
            </main>
            {
                footer && <Footer />
            }


        </div>

    )
}
export default Layout;