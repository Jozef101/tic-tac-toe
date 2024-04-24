import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            <Card.Body>
                <h2 className='text-center mb-4'>Registrácia</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Heslo</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Potvrdenie hesla</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmationRef} required></Form.Control>
                    </Form.Group>
                    <Button type='submit' className='w=100'>Registrovať</Button>
                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
                Už máte účet? Prihláste sa
            </div>
        </>
  )
}
