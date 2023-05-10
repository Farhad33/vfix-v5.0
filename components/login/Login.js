import { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { useRouter } from 'next/router'



export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()


    useEffect(() => {
        let jwt = sessionStorage.getItem("jwt");
        if (jwt) {
            router.push('/admin')
        }
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        axios
        .post('https://strapi.myvfix.com/api/auth/local', {
            identifier: username,
            password: password,
        })
        .then(response => {
            sessionStorage.setItem("jwt", response.data.jwt);
            router.push('/admin')
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });


    }

    return (
        <Background>
            <FormContainer>
                <Logo src='assets/logo/VFIX-Circle-logo.png' />
                <Title>Welcome Back</Title>    
                <SubTitle>Enter your credentials to access your account</SubTitle>    
                <Form onSubmit={handleOnSubmit}>
                    <TextField 
                        type="text" 
                        placeholder="Enter Your Username" 
                        onChange={(e) => setUsername(e.target.value) }
                        value={username}
                    />
                    <TextField 
                        type="password" 
                        placeholder="Enter Your Password" 
                        onChange={(e) => setPassword(e.target.value) }
                        value={password} 
                    />
                    <SignIn type="submit" value="Sign In" />
                </Form>
            </FormContainer>
        </Background>        
    )
}

const Background = styled.div`
    height: 100vh;
    background: rgb(0,153,255);
    background: linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(233,199,255,1) 86%, rgba(255,255,255,1) 99%);
    display: flex;
    justify-content: center;
    align-items: center;
`
const FormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 90px 20px;
    width: 700px;
    background-color: white;
    border-radius: 20px;
`
const Logo = styled.img`
	cursor: pointer;
	width: 10em;
`
const Title = styled.h1`
    margin: 15px;
`
const SubTitle = styled.h3`
    margin-bottom: 20px;
`
const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const TextField = styled.input`
    width: 400px;
    margin-bottom: 20px;
    padding: 10px;
    `
const SignIn = styled.input`
    padding: 10px;
    width: 400px;
    background-color: #2c9cff;
    color: white;
`