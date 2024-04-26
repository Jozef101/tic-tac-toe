import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/Dashboard")
        } catch {
            setError("Prihlásenie sa nepodarilo")
        }
        setLoading(false)
    }

    return (
        <>
            <Card.Body>
                <h2 className='text-center mb-4'>Prihlásenie</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit} id="login">
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required autoComplete="current-email"></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Heslo</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required autoComplete="current-password"></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} type='submit' className='w-100 mt-4'>Prihlásiť sa</Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to="/forgotten-password">Zabudnuté heslo?</Link>
                </div>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
                Nemáte účet? <Link to="/sign-in">Zaregistrujte sa</Link>
            </div>
        </>
  )
}
