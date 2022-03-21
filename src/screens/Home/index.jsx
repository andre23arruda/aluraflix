import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Carousel } from '@trendyol-js/react-carousel'

// custom components
import ButtonLink from '../../components/ButtonLink'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainVideo from '../../components/MainVideo'
import PageTitle from '../../components/PageTitle'
import VideoCard from '../../components/VideoCard'

// utils
import { loadAppData } from '../../utils/utils'

// styles
import styles from './Home.module.scss'

// mocks
import { data } from '../../utils/mock'


export default function ScreenHome() {
    const [cardsToShow, setCardsToShow] = useState(3)
    const [categories, setCategories] = useState([])
    const [mainVideo, setMainVideo] = useState(null)

    useEffect(() => {
        function handleResize() {
            setCardsToShow((window.innerWidth / 450))
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        // const dataCategories = data.categories
        const loadedAppData = loadAppData()
        const dataCategories = loadedAppData.categories
        const randomCategory = dataCategories[Math.floor(Math.random() * dataCategories.length)]
        if (randomCategory) {
            const videos = randomCategory.videos
            setCategories(dataCategories)
            setMainVideo(videos[Math.floor(Math.random() * videos.length)])
        }
    }, [])

    return (
        <div className={ styles.pageContainer }>
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

            <main>
                { mainVideo ? (
                    <>
                        <MainVideo data={ mainVideo }/>

                        { categories.map(categorie => (
                            <section className={ styles.category } key={ categorie.title }>
                                <h3 style={{ backgroundColor: categorie.color }}>
                                    { categorie.title }
                                </h3>

                                <Carousel className={ styles.carousel }
                                    show={ cardsToShow }
                                    slide={ 1 }
                                    swiping={ true }
                                >
                                    { categorie.videos.map(video => (
                                        <VideoCard
                                            borderColor={ categorie.color }
                                            key={ video.url }
                                            title={ video.title }
                                            url={ video.url }
                                        />
                                    ))}
                                </Carousel>
                            </section>
                        ))}
                    </>
                ) : (
                    <h1>Não há vídeos cadastrados :( </h1>
                )}
            </main>

            <Footer />
        </div>

    )
}


// {"categories":[{"title":"Filmes","color":"#C62828","description":"Quem não gosta de um filminho?","videos":[{"title":"DOUTOR ESTRANHO 2 no Multiverso da Loucura","videoLink":"https://www.youtube.com/watch?v=j-pBk19cJpI","description":"© 2022 - Disney"}]}]}