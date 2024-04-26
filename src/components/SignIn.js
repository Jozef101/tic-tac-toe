import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError("Heslá nie sú rovnaké")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Účet sa nepodarilo vytvoriť")
        }
        setLoading(false)
    }

    return (
        <>
            <Card.Body>
                <h2 className='text-center mb-4'>Registrácia</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required autoComplete="current-email"></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Heslo</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required autoComplete="current-password"></Form.Control>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Potvrdenie hesla</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmationRef} required autoComplete="current-password"></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} type='submit' className='w-100 mt-4'>Registrovať</Button>
                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
                Už máte účet? <Link to='/login'>Prihláste sa</Link>
            </div>
        </>
  )
}
