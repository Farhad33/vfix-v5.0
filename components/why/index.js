import React, { useState } from 'react'
import styled from 'styled-components'

export default function Why() {
    const [ selected, setSelected ] = useState('shield')

    return (
        <Container>
            <Tabs>
                <Tab
                    onClick={ () => setSelected(`shield`) }
                    active={ selected === 'shield' }
                    src="assets/why/shield.svg"
                    border='border-right: .5px solid'
                />
                <Tab
                    onClick={ () => setSelected(`technician`) }
                    active={ selected === 'technician' }
                    src='assets/why/technician.svg'
                    border='border-bottom: .5px solid'
                />
                <Tab
                    onClick={ () => setSelected(`calendar`) }
                    active={ selected === 'calendar' }
                    src='assets/why/calendar.svg'
                    border='border-top: .5px solid'
                />
                <Tab
                    onClick={ () => setSelected(`stopwatch`) }
                    active={ selected === 'stopwatch' }
                    src='assets/why/stopwatch.svg'
                    border='border-left: .5px solid'
                />
            </Tabs>
            <TabsContent>
                <TabHeader>
                    { resources[selected].header }
                </TabHeader>
                <TabContent>
                    { resources[selected].text }
                </TabContent>
            </TabsContent>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 560px;
    width: 100%;
    @media (max-width: 700px) {
        flex-direction: column;
	}
`

const Tabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    z-index: 1;
    max-width: 22rem;
    min-width: 22rem;
`
const Tab = styled.img`
    padding: 1.5rem;
    width: 11rem;
    height: 11rem;
    cursor: pointer;
    opacity: ${({ active }) => active ? '1' : '.5'};
    border: .5px solid transparent;
    ${({ active, border }) => active ? `${border} #d2d0d0;` : `${border} #8a8a8a;`}
`

const TabsContent = styled.div`
    width: 100%;
    padding: 1rem;
    max-width: 50rem;
    min-height: 15rem;
    z-index: 1;
`
const TabHeader = styled.h2`
    text-align: center;
    font-size: calc(.5vw + 1.5rem);
    font-weight: 500;
    margin-bottom: 1em;
`
const TabContent = styled.p`
    text-align: center;
    font-size: calc(.5vw + 1rem);
    font-weight: 400;
    line-height: 1.5;
`


const resources = {
    'shield': {
        'header': '$1MM Property Protection',
        'text': 'We aim to deliver exceptional service to all of our customers. When you book your appointment with us, your property will cover up to $1,000,000  against damage.'
    },
    'technician': {
        'header': 'Background Checked Technicians',
        'text': 'We care about safety! Therefore , we run enhanced background check among all of our technicians to ensure there is no issue before they can join our team.'
    },
    'calendar': {
        'header': 'Easy Online Booking',
        'text': 'Booking and scheduling appointments online has been never easier than this! Simply click Book Now button on top of the page and choose you favorite date and time.'
    },
    'stopwatch': {
        'header': 'Less Time to Wait',
        'text': 'No more long time frame window for your technician to show up! Here when you book your appointment with VFIX there is only 1 hour time frame window from the time you choose for your appointment!'
    }
}