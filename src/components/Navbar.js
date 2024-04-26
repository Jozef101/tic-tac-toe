import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useAuth } from './contexts/AuthContext'

const classNames = {
    greenButton: "bg-green-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-green-600 transition duration-300"
}

export default function Navbar() {
    const currentUser = useAuth()
    return (
    <div className="bg-gray-800 py-4">        
        <nav className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-white text-lg font-bold lg:ml-0 ml-4">SKREBL</Link>
            <ul className="flex">
                {
                    currentUser ? <div className="text-white"> LOGOUT </div> : <div className="text-white"> Login</div>
                }
                <li>
                    <Link to="/login" className={classNames.greenButton}>Login</Link>
                </li>
                <li>
                    <Link to="/sign-in" className={classNames.greenButton}>Sign in</Link>
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