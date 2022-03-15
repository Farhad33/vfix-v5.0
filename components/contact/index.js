import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function Contact() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ tel, setTel ] = useState('')
    const [ text, setText ] = useState('')
    const [ success, setSuccess ] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()

            axios.post('https://myvfix.com/api/email', { name, email, text })
            .then(() => {
                setName('')
                setEmail('')
                setTel('')
                setText('')
                setSuccess(true)
            })
            .catch( console.log )

        
    }

    return (
        <Container>
            <ImageWrapper>
                <Image src='assets/Contact-us.svg' />
            </ImageWrapper>
            { success ? (
                <ContactForm>
                    <SuccessMessage>
                        We received your inquiry and one of our representatives will keep in touch with you shortly.
                    </SuccessMessage>
                </ContactForm>
            ) : (
                <ContactForm onSubmit={ onSubmitForm }>
                    <Input
                        type='text'
                        name='fullName'
                        placeholder='Your Name'
                        value={ name }
                        onChange={ (e) => setName(e.target.value)}
                        required={ true }
                    />
                    <Input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value)}
                        required={ true }
                    />
                    <Input
                        type='tel'
                        name='tel'
                        placeholder='Your Phone Number'
                        value={ tel }
                        onChange={ (e) => setTel(e.target.value)}
                        required={ true }
                        maxLength={ 10 }
                        minLength={ 10 }
                    />
                    <TextArea
                        value={ text }
                        onChange={ (e) => setText(e.target.value)}
                    />
                    <SubmitInput
                        type='submit'
                        value='Send'
                    />
                </ContactForm>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #333333;
    height: auto;
    width: 100%;
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        h1 {
            font-size: 1.5rem;
        }
	}
`

const SuccessMessage = styled.h1`
    color: #a35278;
`
const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 1rem;
    @media (max-width: 700px) {
        width: 90%;
	}
`
const Input = styled.input`
    width: 100%;
    min-width: 20rem;
    max-width: 23rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    padding: .5rem;
    background: transparent;
    color: white;
    border-top: none;
    border-left: none;
    border-right: none;
`
const TextArea = styled.textarea`
    width: 100%;
    min-height: 10rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
`
const SubmitInput = styled.input`
    background: #00aeef;
    color: white;
    font-size: 1.3rem;
    font-weight: 300;
    padding: 1.3rem 8rem;
    width: 100%;
    min-width: 20rem;
    max-width: 23rem;
    border: none;
    border-radius: 3rem;
    appearance: none;
`

const ImageWrapper = styled.div`
    width: 50%;
    pointer-events: none;
    @media (max-width: 700px) {
        width: 100%;
	}
`
const Image = styled.img`
    width: auto;
    height: auto;
    transform: rotate(90deg);
    @media (max-width: 700px) {
        transform: rotate(0deg);
        position: relative;
        top: -8rem;
	}
`