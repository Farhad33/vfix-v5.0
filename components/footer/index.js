import React from 'react'
import styled from 'styled-components'
// import icons from 'styles/icons.js'
import icons from '../../styles/icons'

export default function Footer() {
    return (
        <Container>
            <a href="https://www.facebook.com/myvfix/">
                <Icon viewBox="0 0 1024 1024">
                    <Path d={ icons.facebookWhite } />
                </Icon>
            </a>
            <a href="https://www.instagram.com/myvfix/">
                <Icon viewBox="0 0 1024 1024">
                    <Path d={ icons.instagramWhite } />
                </Icon>
            </a>
            <a href="https://twitter.com/myvfix">
                <Icon viewBox="0 0 1024 1024">
                    <Path d={ icons.twitterWhite } />
                </Icon>
            </a>
            <a href="https://www.linkedin.com/company/vfix-llc/">
                <Icon viewBox="0 0 1024 1024">
                    <Path d={ icons.linkdin.path1 } />
                    <Path d={ icons.linkdin.path2 } />
                </Icon>
            </a>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 8rem;
    width: 100%;
    background: #171717;
    color: white;
`

const Icon = styled.svg`
    width: 3rem;
    height: 3rem;
    margin: 1rem;
`
const Path = styled.path`
    fill: white;
    stroke: white;
    stroke-width: 0;
`