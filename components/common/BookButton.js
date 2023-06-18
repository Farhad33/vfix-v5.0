import React from 'react'
import styled from 'styled-components'

export default function BookButton({ children, className }) {

	const handleOnClick = () => {
		Zenbooker.showPopupWidget('https://widget.zenbooker.com/book/1602564569602x960307736376989400?embed=true')
	}

	return (
		<Button
			className={className}
			onClick={handleOnClick}
		>
			{ children || 'Book Now' }
		</Button>
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