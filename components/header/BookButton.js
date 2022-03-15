import React from 'react'
import styled from 'styled-components'

export default function BookButton({ children, onClick }) {
    return <Button onClick={ onClick }>{ children }</Button>
}

const Button = styled.div`
	color: inherit;
	cursor: pointer;
	border: .5px solid rgba(121, 121, 121, .4);
	background: rgba(255, 255, 255, .4);
	padding: .7em 2em;
	font-weight: 500;
	border-radius: 5px;
	width: 100%;
	text-align: center;
	box-shadow: 5px 2px 11px -4px rgba(0,0,0,0.54);
	:active {
		background: #57b5fd;
	}
`