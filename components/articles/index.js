import React from 'react'
import styled from 'styled-components'
import useFetch from '../../utility/hooks/useFetch';
import ReactMarkdown from 'react-markdown'


export default function Articles() {
    
    const { loading, error, data } = useFetch('http://strapi.myvfix.com/api/articles?populate=services,thumbnail');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>


    return(
        <Container>
            {data?.map((content) => (
                <ArticleBox key={content.id}>
                    <Thumbnail src={`http://strapi.myvfix.com${content.attributes.thumbnail.data.attributes.url}`} />
                    <TextBox>
                        <ArticleTitle>
                           {content.attributes.title}
                        </ArticleTitle>
                        <ArticleDescription>
                            {content.attributes.description}
                        </ArticleDescription>
                    </TextBox>

                </ArticleBox>
            ))}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

const ArticleBox = styled.div`
    display: flex;
    border-top: 1px solid #d2d2d7;
    width: 800px;
    height: 200px;
    &:last-child {
        border-bottom: 1px solid #d2d2d7;
    }
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px;
`

const Thumbnail = styled.img`
    height: 150px;
    border-radius: 15px;
    margin: 15px;
    align-self: flex-start;
`

const ArticleTitle = styled.h2`

`

const ArticleDescription = styled.h4`
    margin-top: 15px;
`