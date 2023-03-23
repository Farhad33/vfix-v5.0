import { useEffect, useState } from "react";
import styled from 'styled-components'
import Markdown from "../common/Markdown";
import { default as Button } from '../common/BookButton'
import { api } from '../../utility/hooks/useFetch'

export default function ServiceDetail({ id }) {
    const [data,  setData] = useState({})
    const url = `http://strapi.myvfix.com/api/services/${id}`

    useEffect(() => {
        if (id) {
            api(url)
            .then(response => setData(response.data.data))
            .catch(error => console.log('error => ', error))
        }
    }, [id])

    return (
        <Container>
            <ContentContainer>
                <Title>Title: {data?.attributes?.title}</Title>
                <Markdown>{data?.attributes?.markdown}</Markdown>
                <BookButton />
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
`
const Title = styled.h1`
    margin: 50px 0;
    text-align: center;
`

const BookButton = styled(Button)`
    align-self: center;
    margin: 50px 0;
`