import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const Markdown = styled(ReactMarkdown)`
    h1, h2, h3, h4, h5, h6 {
        margin-top: 25px;
        margin-bottom: 25px;
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
    ol, ul {
        margin-left: 18px;
        li {
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
        }
    }
`

export default Markdown