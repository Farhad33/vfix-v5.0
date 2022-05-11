import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Projects from './Projects'
import Header from '../header'
import BookButton from '../header/BookButton'

export default function FirstPage() {
  const [ overlay, setOverlay ] = useState(false)
	const toggelOverlay = () => {
    setOverlay(!overlay)
  }
  return (
    <Container>
      <Header toggelOverlay={ toggelOverlay } overlay={ overlay }/>
      <SubContainer>
        <ProjectsButton>
          <Projects />
          <BookButtonWrapperTop>
            <BookButton onClick={  toggelOverlay  }>Book Now</BookButton>
          </BookButtonWrapperTop>
        </ProjectsButton>
        <Home src="assets/main/3d-home.svg" />
        <BookButtonWrapperBottom>
          <BookButton onClick={  toggelOverlay  }>Book Now</BookButton>
        </BookButtonWrapperBottom>
      </SubContainer>
    </Container>
  )
}

const ProjectsButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 100%;
  background: rgb(0,153,255);
  background: linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(233,199,255,1) 86%, rgba(255,255,255,1) 99%);
`
const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }
  @media (max-width: 700px) {
    margin-top: 0;
  }
  @media (max-width: 500px) {
    margin-top: 2rem;
  }
`

const BookButtonWrapperTop = styled.div`
  display: flex;
  width: 20rem;
  color: black;
  margin: 4rem 1rem 1rem 10rem;
  @media (max-width: 900px) {
    display: none;
  }
`
const BookButtonWrapperBottom = styled.div`
  display: none;
  width: 20rem;
  color: black;
  margin: 1rem;
  @media (max-width: 900px) {
    display: flex;
  }
`

const fadeIn = keyframes`
  0% {
    top: -200px;
    right: -500px;
  }
  100% {
    top: 0;
    right: 0;
  }
`
const Home = styled.img`
	max-width: 40rem;
	max-height: 40rem;
	min-width: 10rem;
	min-height: 10rem;
	width: 100%;
	height: 100%;
  cursor: pointer;
  position: relative;
  animation: 1.5s ${fadeIn} ease-out;
  @media (max-width: 900px) {
    width: 25rem;
	  height: 20rem;
  }
  @media (max-width: 400px) {
    width: 20rem;
	  height: 15rem;
  }
`