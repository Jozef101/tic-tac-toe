import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')
        navigate("/")
        try {
            await logout()
            console.log("logout")
        } catch {
            setError('Failed to logout')
        }
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Profil</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Email: </strong>{ currentUser.email }
                <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>Upraviť profil</Link>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            <Button variant='link' onClick={handleLogout}>Odhlásiť</Button>
        </div>
    </>
  )
}
