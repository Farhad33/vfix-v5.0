import Header from '../../components/header'
import Footer from '../../components/footer'
import Service from '../../components/service'
import { useRouter } from 'next/router'

export default function ServiceDetail() {
    const router = useRouter()
    const serviceId = router.query.serviceId;

    return (
        <>
            <Header />           
            <Service id={serviceId} />
            <Footer />
        </>
    )
}