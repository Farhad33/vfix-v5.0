import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

export default function Modal({ children, setOnClose }) {
  const overlayContainer = document.createElement('div')
  document.body.appendChild(overlayContainer)

  useEffect(() => {
    document.body.appendChild(overlayContainer)
    return () => document.body.removeChild(overlayContainer)
  })

  return ReactDom.createPortal(
    <Overlay>
      <Close onClick={ () => setOnClose(false) }>X</Close>
      { children }
    </Overlay>,
    overlayContainer
  )
}

const Overlay = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  z-index: 999;
  background: transparent;
  outline: 9999px solid rgba(0, 0, 0, 0.5);
  @media only screen and (min-width: 600px) {
    width: 90%;
  }
`

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: black;
  font-size: 2rem;
  z-index: 9999;
  padding: 0 .5rem;
  cursor: pointer;
`