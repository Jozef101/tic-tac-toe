import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Účet sa nepodarilo vytvoriť")
        }
        setLoading(false)
    }

    return (
        <>
            <Card.Body>
                <h2 className='text-center mb-4'>Prihlásenie</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Heslo</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} type='submit' className='w=100 mt-4'>Prihlásiť sa</Button>
                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
                Nemáte účet? <Link to="/sign-in">Zaregistrujte sa</Link>
            </div>
        </>
  )
}
