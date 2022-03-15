import React, { useState } from 'react'
import styled from 'styled-components'

export default function Services() {
    const [ tabIndex, setTabIndex ] = useState(1)
    return (
        <Container>
            <OverlapServices />
            <TopServices />
            <Header>VFix Services</Header>
            <TabContainer>
                <Tabs>
                    {resources.map(({ title }, index) => (
                        <Tab
                            key={ index }
                            onClick={ () => setTabIndex(index) }
                            selected={ tabIndex === index }
                            grid={ title.replace(/\s/g,'') }
                        >{ title }</Tab>
                    ))}
                </Tabs>
                <TabItems>
                    {resources[tabIndex].services.map(({ title, text, icon }, index) => (
                        <Item key={ index }>
                            <h2>{ title }</h2>
                            <img src={`assets/services/${icon}`} />
                            <p>{ text }</p>
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
    width: 100%;
    min-height: 10em;
    height: auto;
    /* border: 1px solid #000; */
    padding-top: 1rem;
    img {
        height: 4em;
    }
    h2 {
        font-size: 1.2rem;
        font-weight: 400;
    }
    p {
        opacity: 0;
        text-align: center;
        padding: 0 .5rem;
    }
    :hover {
        p {
            opacity: 1;
            font-size: 1rem;
        }
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
        'title': 'Smart Home',
        'services': [
            {
                'icon': 'smart-home/Artificial-Intelligence.svg',
                'title': 'Artificial Intelligence',
                'text': 'Let your voice command the house! Our VFix Experts can set up your Alexa, Google Home, and Home Pod to ensure that all your smart devices are at your service. Alexa, Turn on the TV!'
            },
            {
                'icon': 'smart-home/Smart-Home-Setup.svg',
                'title': 'Smart Home Setup',
                'text': 'Connecting a bunch of smart devices to a home system can be difficult, but we make it easy. Let us connect and set up your devices to a single hub so that they can work seamlessly with each other.'
            },
            {
                'icon': 'smart-home/Smart-Lighting.svg',
                'title': 'Smart Lighting',
                'text': 'We know how frustrating it can be when you’re already in bed, but you forgot to turn the lights off. But have no fear! Have our Expert set up your smart lights, so you can simply turn it off with your phone. It’s that easy!'
            },
            {
                'icon': 'smart-home/Smart-Lock.svg',
                'title': 'Smart Lock',
                'text': 'We can replace your old door knob with a smart one and configure the auto lock options to ensure that all security features are in place. We make sure to keep your home safe while you\'re away!'
            },
            {
                'icon': 'smart-home/Smart-Remote-Setup.svg',
                'title': 'Smart Remote Setup',
                'text': 'Can I have the remote for the TV? How about for the sound bar? Apple TV? Amazon Fire TV? Let our VFix Experts conveniently replace all of your home theatre devices\' remotes with 1 smart universal remote or your smart phone!'
            },
            {
                'icon': 'smart-home/Smart-Thermostat.svg',
                'title': 'Smart Thermostat',
                'text': 'Save $150/month by using a smart thermostat. We can install and configure any thermostat, regardless of the brand. So avoid the hassle of dealing with the wires and complicated configurations and give us a call!'
            }
        ]
    },
    {
        'title': 'Computer Services',
        'services': [
            {
                'icon': 'computer-services/Virus-Removal.svg',
                'title': 'Virus Removal',
                'text': 'We’ll sweep and check your PC for viruses and eliminate any possible threats that could be slowing you down. We will also focus on maintaining your PC’s security by taking care of viruses early to avoid file loss and data corruption.'
            },
            {
                'icon': 'computer-services/Computer-Diagnostic-Repair.svg',
                'title': 'Diagnostic And Repair',
                'text': 'Stay up and running with a computer checkup and allow us to troubleshoot any issues that might be preventing your PC from performing at an optimal level.'
            },
            {
                'icon': 'computer-services/Electronic-Setup.svg',
                'title': 'Electronic Setup',
                'text': 'We provide hardware and software installation, while specifically focusing on ways to increase your PC’s efficiency and usability.'
            },
            {
                'icon': 'computer-services/Printer-Setup.svg',
                'title': 'Printer Setup',
                'text': 'We know how frustrating and confusing it is to setup a wireless printer. Our experts will not only setup and configure your new printer, but they will also teach you how to use all of its features and basic functions.'
            },
            {
                'icon': 'computer-services/Data-Backup.svg',
                'title': 'Data Backup',
                'text': 'You never think about data backup until it’s too late. We’ll help you securely backup and transfer your music, pictures and documents from your PC to the external storage you provide.'
            },
            {
                'icon': 'computer-services/Wi-Fi Solutions.svg',
                'title': 'Wifi Solutions',
                'text': 'With our Wireless Networking solution, we will install the necessary equipment to connect the devices to your new network. Also we will determine the possible problems on your current network.'
            },
            {
                'icon': 'computer-services/PC-MAC-support.svg',
                'title': 'PC/Mac Support',
                'text': 'Wondering if it’s time to upgrade your PC or MAC? If you need a little help assessing your technology, this is what we do. Tell us your priorities, preferences, and needs and we’ll put together a customized plan to help you get what you want out of your technology.'
            },
            {
                'icon': 'computer-services/PC-Tuneup.svg',
                'title': 'PC Tune-UP',
                'text': 'We’ll adjust important settings and remove unwanted programs to get your PC feeling like new again'
            }
        ]
    },
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





