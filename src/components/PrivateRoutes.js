import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from './contexts/AuthContext'

export default function PrivateRoutes() {
    const { currentUser } = useAuth()
    return (
        <>
        console.log("SOM TU " + currentUser)
        {currentUser ? <Outlet /> : <Navigate to='/login' />}
        </>
    )
}
