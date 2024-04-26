import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function LogoutButton() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')
        navigate("/")
        try {
            await logout()
        } catch {
            setError('Failed to logout')
        }
    }

  return (
    <>
       
            <Button variant='success' onClick={handleLogout}>Odhlásiť</Button>
        
    </>
  )
}
