import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <div >        
        <nav>
            <Link to="/">Site name</Link>
            <ul>
                <li>
                    <CustomLink to="/pricing">Pricing</CustomLink>
                </li>
                <li>
                    <CustomLink to="/about">About</CustomLink>
                </li>
            </ul>
        </nav>
    </div>)
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}