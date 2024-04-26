import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
export default function ForgottenPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Postupujte podľa pokynov, ktoré sme vám odoslali na email ' + emailRef.current.value)
            emailRef.current.value = ''
        } catch {
            setError("Obnovenie hesla sa nepodarilo")
        }
        setLoading(false)
    }

    return (
        <>
            <Card.Body>
                <h2 className='text-center mb-4'>Obnovenie hesla</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} type='submit' className='w-100 mt-4'>Obnoviť heslo</Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to="/login">Späť na prihlásenie</Link>
                </div>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
                Nemáte účet? <Link to="/sign-in">Zaregistrujte sa</Link>
            </div>
        </>
  )
}
