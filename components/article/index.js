import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Markdown from "../common/Markdown";
import Image from 'next/image'
import { api, StrapiBaseURL } from '../utility/api';


export default function Article({id}) {
    const [data,  setData] = useState()
    const url = `http://strapi.myvfix.com/api/articles/${id}?populate=thumbnail`

    const imageURL = () => {
        const { attributes: { thumbnail } } = data
        let url = thumbnail?.data?.attributes?.formats?.small?.url || thumbnail?.data?.attributes?.url
        return StrapiBaseURL + url
    }
    
    useEffect(() => {
        if (id) {
            api(url)
            .then(response => setData(response.data.data))
            .catch(error => console.log('error => ', error))
        }
    }, [id])
    
    if (!data) return <p>Loading...</p>

    console.log('data => ', data);

    return(
        <Container>
            <Title>{data.attributes.title}</Title>
            <ArticleImage
                height={400}
                src={imageURL()}
                alt="test"
            />
            <Markdown>{data.attributes.markdown}</Markdown>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin: 50px auto;
`
const Title = styled.h1`
    font-size: 40px;
`
const ArticleImage = styled.img`
    height: ${({height}) => height}px;
    margin: 50px auto;
`