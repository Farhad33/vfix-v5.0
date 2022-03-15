import React from 'react'
import styled, { keyframes, css } from 'styled-components'


export default class Projects extends React.Component {
    state = {
        list: services.slice(0, 5),
        index: 1,
        intervalId: '',
        transition: false
    }

    generateList = () => {
        const { index, list } = this.state
        let arr = []
        let tempIndex = index
        list.forEach((_, num) => {
            num = num + 1
            let i = 0
            if (index + num >= services.length) {
                i = (index + num) - services.length
            } else {
                i = index + num
            }
            arr.push(services[ i ])
        })

        tempIndex = index === services.length ? 0 : index + 1
        this.setState({
            list: arr,
            index: tempIndex,
            transition: true
        })
    }

    componentDidMount() {
        const intervalId = setInterval(this.generateList, 2000)
        this.setState({ intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    render() {
        const { list, transition } = this.state
        return (
            <Container>
                <FirstTitle>Let us finish your</FirstTitle>
                <Words>
                    <Small> { list[0] } </Small>
                    <Medium small={ transition }> { list[1] } </Medium>
                    <Large> { list[2] } </Large>
                    <Medium large={ transition }> { list[3] } </Medium>
                    <Small transition={ transition }> { list[4] } </Small>
                </Words>
                <SecondTitle>Project</SecondTitle>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1rem;
    @media (max-width: 900px) {
        margin-left: 0;
    }
    @media (max-width: 700px) {
        margin-top: 2rem;
    }
`

const FirstTitle = styled.p`
    letter-spacing: .1px;
    font-size: 1.9rem;
    width: 14.2rem;
    @media (max-width: 700px) {
        font-size: 1.5rem;
        width: 11rem;
    }
    @media (max-width: 500px) {
        font-size: 1.2rem;
        width: 8.5rem;
    }
    @media (max-width: 400px) {
        font-size: .8rem;
        width: 6.5rem;
    }
`
const SecondTitle = styled.p`
    letter-spacing: .1px;
    font-size: 1.9em;
    @media (max-width: 700px) {
        font-size: 1.5em;
    }
    @media (max-width: 500px) {
        font-size: 1.2em;
    }
    @media (max-width: 400px) {
        font-size: .9em;
    }
`

const Words = styled.div`
    text-align: center;
    width: 21.5rem;
    @media (max-width: 700px) {
        width: 16rem;
    }
    @media (max-width: 500px) {
        width: 13rem;
    }
    @media (max-width: 400px) {
        width: 11rem;
    }
`
const Small = styled.p`
    padding: .5rem .7rem;
    letter-spacing: .1px;
    font-size: .8rem;
    color: #6b7587;
    @media (max-width: 700px) {
        font-size: .7rem;
    }
    @media (max-width: 500px) {
        font-size: .6rem;
    }
`

const Medium = styled.p`
    padding: 0 .7em;
    letter-spacing: .1px;
    font-size: 1.2em;
    color: #6b7587;
    @media (max-width: 700px) {
        font-size: 1em;
    }
    @media (max-width: 500px) {
        font-size: .9em;
    }
`

const Large = styled.p`
    padding: .5em .7em;
    letter-spacing: .1px;
    font-size: 2em;
    color: white;
    @media (max-width: 700px) {
        font-size: 1.5em;
    }
    @media (max-width: 500px) {
        font-size: 1.2em;
    }
    @media (max-width: 400px) {
        font-size: 1em;
    }
`

const services = [
    'Printer Setup',
    'Computer Support',
    'TV Mounting',
    'Electronic Setup',
    'Virus Removal',
    'Wifi Solution',
    'Smart Remote Setup',
    'PC Tune-Up',
    'Data Backup',
    'Smart Home Setup',
    'Board Installation',
    'Furniture Assembly',
    'Grill Assembly',
    'Handyman Services'
]