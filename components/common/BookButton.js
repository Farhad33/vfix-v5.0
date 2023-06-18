import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../modal'

export default function BookButton({ children, className }) {
	const [ open, setOpen ] = useState(false)
	return (
		<>
			{ open &&
				<Modal setOnClose={  setOpen  }>
					<Iframe
						src='https://widget.zenbooker.com/book/1602564569602x960307736376989400'
					></Iframe>
				</Modal> 
			}
			<Button className={className} onClick={ () => setOpen(true) }>{ children || 'Book Now' }</Button>
		</>
	)
}

const Button = styled.div`
	display: flex;
	justify-content: center;
	color: inherit;
	width: 20rem;
  	color: black;
	cursor: pointer;
	border: .5px solid rgba(121, 121, 121, .4);
	background: rgba(255, 255, 255);
	padding: .7em 2em;
	font-weight: 500;
	border-radius: 5px;
	text-align: center;
	box-shadow: 5px 2px 11px -4px rgba(0,0,0,0.54);
	:active {
		background: #57b5fd;
	}
`

const Iframe = styled.iframe`
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.85);
`