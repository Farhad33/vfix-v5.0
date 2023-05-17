import Header from '../../components/header'
import Footer from '../../components/footer'
import Article from '../../components/article'
import { useRouter } from 'next/router'

export default function ServiceDetail() {
    const router = useRouter()
    const articleId = router.query.articleId;

    return (
        <>
            <Header />           
            <Article id={articleId} />
            <Footer />
        </>
    )
}