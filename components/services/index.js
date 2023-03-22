import React, { useState } from 'react'
import styled from 'styled-components'
import useFetch from '../../utility/hooks/useFetch'


export default function Services() {
    const [ tabIndex, setTabIndex ] = useState(0)

    const { loading, error, data } = useFetch('http://strapi.myvfix.com/api/services?populate=articles,thumbnail');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>


    console.log("ser", data)

    return (
        <Container>
            <OverlapServices />
            <div id='services'></div>
            <TopServices />
            <Header>VFix Services</Header>
            <TabContainer>
                <TabItems>
                    {data.map(({id, attributes: {title, description, thumbnail}}) => (
                        <Item key={ id }>
                            <h2>{ title }</h2>
                            <p>{ description }</p>
                            <img src={`http://strapi.myvfix.com${thumbnail.data.attributes.url}`} />

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
const Tabs = styled.div`
    margin: 2rem;
    display: grid;
    grid-template-areas:
    'SmartHome'
    'ComputerServices'
    'HandymanServices';
    @media only screen and (min-width: 600px) {
        grid-template-areas:
        'SmartHome ComputerServices HandymanServices';
    }
`
const Tab = styled.h1`
    border: 2px solid #4FC3F7;
    border-radius: 10px;
    text-align: center;
    padding: 1.2em 0;
    cursor: pointer;
    margin: 1px;
    font-size: 1.2rem;
    font-weight: 400;
    :hover {
        background: #4FC3F7;
    }
    ${({ selected }) => selected && 'background: #4FC3F7;'}
    grid-area: ${({ grid }) => grid };
`
const TabItems = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    border-radius: 15px;
    margin: 10px;
    width: 100%;
    min-height: 10em;
    height: 15rem;
    padding-top: 1rem;
    img {
        height: 6em;
        opacity: .4;
        position: absolute;
        margin: 50px;
    }
    h2 {
        font-size: 1.2rem;
        font-weight: 400;
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

const Header = styled.h1`
    margin-bottom: 2em;
`



const resources = [
    
    {
        'title': 'Handyman Services',
        'services': [
            {
                'icon': 'handyman-services/Board-Installation.svg',
                'title': 'Board Installation',
                'text': 'Our Experts are equipped with the right tools and adhere to proper safety precautions, so avoid a headache and have us install the board for you!'
            },
            {
                'icon': 'handyman-services/Furniture-Assembly.svg',
                'title': 'Furniture Assembly',
                'text': 'Instead of dealing with weird instructions that nobody can understand, call us now for a quick quote. Our Experts can assemble even the most complicated furniture in less time and inspect them for safety. Now you can sit and relax while we take care of the job for you!'
            },
            {
                'icon': 'handyman-services/Grill-Assembly.svg',
                'title': 'Grill Assembly',
                'text': 'Why put 4 hours of your valuable time to build a grill, when we can do it for you in less than an hour? We have all the necessary tools to assemble your heavy grill, quick and easy.'
            },
            {
                'icon': 'handyman-services/Handyman-Services.svg',
                'title': 'Handyman Services',
                'text': 'VFix it, so you don’t have to! Let us take care of all the jobs that you don’t want to deal with! Our handyman services will cover assemblies and mounting'
            },
            {
                'icon': 'handyman-services/TV-Mount-Service.svg',
                'title': 'TV Mount Service',
                'text': 'Stop aimlessly drilling holes into the wall just to find the stud! Have our Expert take care of it for you; we have professional tools to find the best position to secure your TV to the wall, hassle-free.'
            }
        ]
    }
]





