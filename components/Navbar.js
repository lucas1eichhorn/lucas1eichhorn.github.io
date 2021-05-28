import Link from 'next/link'
const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand" >Portfolio</a>
            </Link>
            <Link href="/github">
                <a className="nav-link text-light pull-right">Github</a>
            </Link>

        </div>
    </nav>
)

export default Navbar;