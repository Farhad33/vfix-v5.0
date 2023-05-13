import React, { useState } from 'react'
import styled from 'styled-components'

export default function Header({ overlay, toggelOverlay }) {
	const [ ham, setHam ] = useState(false)
	
	const NavItemOnClick = (size) => {
		if(size) {
			window.scroll(0, size)
		}
		if(ham) {
			setHam(false)
		}
	}

	return (
		<Container>
			<Logo width={160} height={80} src='assets/logo/VFIX-logo-White.png' />
			<Nav ham={ ham }>
				<NavItem href="/#services">Services</NavItem>
				<NavItem href="/#contactus" >Contact Us</NavItem>
				<NavItem href="tel:8559558349">(855) 955-8349</NavItem>
			</Nav>
			<Burger
				onClick={ () => setHam(!ham) }
			>&#9776;
			</Burger>
		</Container>
	)
}

const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background: #000000c7;
	z-index: 11;
	padding: 0 2em;
	@media (max-width: 700px) {
		flex-direction: column;
	}
	@media (max-width: 500px) {
		flex-direction: row;
	}
`

const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	@media (max-width: 500px) {
		display: ${({ ham }) => ham ? 'flex' : 'none'};
		position: absolute;
		top: 70px;
		left: 0;
		flex-direction: column;
		background: rgba(0,0,0, .8);
		width: 100%;
	}
`

const Burger = styled.div`
	display: none;
	color: white;
	font-size: 2em;
	padding-right: 4px;
	cursor: pointer;
	@media (max-width: 500px) {
		display: block;
		position: absolute;
		top: 10px;
		right: 15px;
	}
`

const NavItem = styled.a`
	display: flex;
	color: white;
	font-size: 1.2rem;
	cursor: pointer;
	a {
		color: white;
		text-decoration: none;
	}
	@media (max-width: 500px) {
		padding: 1.5em;
	}
	:hover {
		text-decoration: underline;
	}
`

const Logo = styled.img`
	cursor: pointer;
	width: ${({width}) => width}px;
	height: ${({height}) => height}px;
`