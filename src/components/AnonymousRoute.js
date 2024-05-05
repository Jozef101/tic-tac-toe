import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export default function AnonymousRoute() {
    const { currentUser } = useAuth()
    console.log("CURRENT USER =" + currentUser)
  return (
    <>    
        {!currentUser ? <Outlet /> : <Navigate to="/" />}
    </>
  )
}
