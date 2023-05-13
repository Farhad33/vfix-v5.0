import { useEffect, useState } from "react";
import styled from 'styled-components'
import Markdown from "../common/Markdown";
import { default as Button } from '../common/BookButton'
import { api, VFixBackendURL } from '../utility/api'


export default function Service({ id }) {
    const [data,  setData] = useState({})
    const url = `http://strapi.myvfix.com/api/services/${id}?populate=articles.thumbnail,thumbnail`

    useEffect(() => {
        if (id) {
            api(url)
            .then(response => setData(response.data.data))
            .catch(error => console.log('error => ', error))
        }
    }, [id])
    console.log("DATA",data);
    return (
        <Container>    
            <ServiceContainer>
                <Title>{data?.attributes?.title}</Title>
                <ServiceImage
                    src={`https://strapi.myvfix.com/${data?.attributes?.thumbnail?.data?.attributes?.url}`}
                    alt={data?.attributes?.thumbnail?.data?.attributes?.alternativeText}
                />
                <Markdown>{data?.attributes?.markdown}</Markdown>
                <BookButton />
            </ServiceContainer>
            <AticleContainer>
             { data?.attributes?.articles?.data?.map(({attributes: { title , thumbnail, description}, id}) => (
                <AticleCard key={id}>
                    <h4>{title}</h4>
                    <ArticleContent>
                        <ArticleImage
                            src={`https://strapi.myvfix.com/${thumbnail?.data?.attributes?.url}`}
                            alt={thumbnail?.data?.attributes?.alternativeText}
                        />
                        <div><p>{description}</p></div>
                    </ArticleContent>    
                </AticleCard>
            ))}
            </AticleContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    /* display: grid; */
    /* grid-template-columns: 20% 50% 30%;
    gap: 30px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
`
const ServiceContainer = styled.div`
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

const AticleContainer = styled.div`
    margin-bottom: 50px;
`
const AticleCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    margin-bottom: 50px;
    padding: 10px;
`
const ArticleContent = styled.div`
    display: flex;
    margin-top: 20px;
    line-height: 30px;
    p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
                line-clamp: 4; 
        -webkit-box-orient: vertical;
        margin: 10px;
    }
    
`

const ArticleImage = styled.img`
    height: 150px;
`
const ServiceImage = styled.img`
    width: 200px;
    height: 200px;
    margin: auto;
`
