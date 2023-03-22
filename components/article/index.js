import React from 'react'
import styled from 'styled-components'
import useFetch from '../../utility/hooks/useFetch';
import ReactMarkdown from 'react-markdown'


export default function Article() {
    
    const { loading, error, data } = useFetch('strapi.myvfix.com/api/articles');
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>


    console.log(data.data)

    return(
        <Container>
            <PageContent>
                {data.data.map((article) => (
                        <ArticleBox key={article.id}>
                            <h1>{article.attributes.title}</h1>
                            <Markdown key={article.id}>{article.attributes.markdown}</Markdown>
                        </ArticleBox>
                ))}
            </PageContent>
            <PageContent>
                <RelativeArticleList>
                    {data.data.map((article) => (
                        <li key={article.id}>
                            {article.attributes.title}
                        </li>
                    ))}
                </RelativeArticleList>
            </PageContent>
        </Container>
    )
}

const Markdown = styled(ReactMarkdown)`
    max-width: 600px;

    h1, h2, h3, h4, h5, h6 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    p, ol, li, img {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    p {
        white-space: pre-wrap;
        color: #2D3236;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0;
    }
    img {
        width: 100%;
    }
    ol {
        margin-left: 18px;
    }
`


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`


const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ArticleBox = styled.div`
    border: 2px solid black;
    margin: 10px;
`


const RelativeArticleList = styled.div`
    background-color: lightgray;
    border: 2px solid black;
`


const P = styled.p`
    margin: 5%;
`
