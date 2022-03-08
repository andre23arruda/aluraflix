import Link from 'next/link'

import { Carousel } from '@trendyol-js/react-carousel'

// custom components
import ButtonLink from '../../components/ButtonLink'
import Footer from '../../components/Footer'
import FormField from '../../components/FormField'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import VideoCard from '../../components/VideoCard'

export default function ScreenHome() {
    return (
        <>
            <PageTitle>
                Home
            </PageTitle>

            <Header>
                <ButtonLink color="black" as="link">
                    <Link href="/new-video">
                        Novo vídeo
                    </Link>
                </ButtonLink>
            </Header>

            <h1>Novo</h1>

            <ButtonLink>
                Limpar
            </ButtonLink>

            <ButtonLink color="blue">
                Limpar
            </ButtonLink>

            <FormField
                placeholder="Categoria"
            />

            <FormField
                placeholder="Categoria"
                border="border-blue"
            />

            <Carousel
                show={ 3.5 }
                slide={ 3 }
                swiping={ true }
            >
                <VideoCard
                    border="border-blue"
                />
                <VideoCard
                    border="border-blue"
                />
                <VideoCard
                    border="border-blue"
                />
                <VideoCard
                    border="border-blue"
                />
            </Carousel>





            <Footer />
        </>
    )
}