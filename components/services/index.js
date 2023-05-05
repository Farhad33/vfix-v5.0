import React, { useState } from 'react'
import styled from 'styled-components'
import useFetch from '../../utility/hooks/useFetch'


export default function Services() {
    const [ tabIndex, setTabIndex ] = useState(0)
    const baseURL = process.env.NEXT_PUBLIC_BASEURL || 'https://myvfix.com'

    const { loading, error, data } = useFetch('https://strapi.myvfix.com/api/services?populate=articles,thumbnail');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    // href={`${baseURL}/service/${id}`}
    return (
        <Container>
            <OverlapServices />
            <div id='services'></div>
            <TopServices />
            <Header>VFix Services</Header>
            <TabContainer>
                <TabItems>
                    {data.map(({id, attributes: {title, description, thumbnail}}) => (
                        <Item key={id} >
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <img src={`https://strapi.myvfix.com${thumbnail.data.attributes.url}`} />
                        </Item>
                    ))}
                </TabItems>
            </TabContainer>
        </Container>
    )
}

const OverlapServices = styled.div`
    height: 10rem;
    width: 100%;
    background-color: #fff;
    transform: skewY(4deg);
    margin-bottom: -3rem;
`

const TopServices = styled.div`
    width: 100%;
    height: 13rem;
    margin-bottom: 2rem;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(24,205,255,1) 35%, rgba(255,255,255,1) 100%);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 750px;
    width: 100%;
`

const TabContainer = styled.div`
    min-width: 90%;
    width: auto;
    min-height: 500px;
`

const Header = styled.h1`
    margin-bottom: 2em;
`

const TabItems = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Item = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    text-decoration: none;
    color: black;
    border-radius: 15px;
    margin: 10px;
    width: 100%;
    min-height: 10em;
    height: 15rem;
    padding-top: 1rem;
    cursor: pointer;
    img {
        height: 6em;
        opacity: .4;
        position: absolute;
        margin: 50px;
    }
    h2 {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 5px;
    }
    p {
        margin: 5px;
        text-align: center;
        padding: 0 .5rem;
        width: 17rem;
        font-weight: 400;
    }

    @media only screen and (min-width: 600px) {
        width: 15rem;
        img {
            height: 4.5em;
        }
        h2 {

        }
        p {

        }
    } 
    @media only screen and (min-width: 768px) {
        width: 20rem;
        img {
            height: 5em;
        }
        h2 {

        }
        p {
            
        }
    } 
    @media only screen and (min-width: 992px) {
        img {
            height: 5.5em;
        }
        h2 {

        }
        p {
            
        }
    } 
    @media only screen and (min-width: 1200px) {
        img {
            height: 6em;
        }
        h2 {

        }
        p {

        }
    }
`
