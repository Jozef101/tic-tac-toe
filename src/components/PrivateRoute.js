import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export default function PrivateRoute() {
    const { currentUser } = useAuth()
    console.log("SOM TU KONECNE")
  return (
    <>    
        {currentUser ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}
