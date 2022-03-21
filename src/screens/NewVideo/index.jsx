import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// custom components
import ButtonLink from '../../components/ButtonLink'
import Footer from '../../components/Footer'
import FormField from '../../components/FormField'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'

// styles
import styles from './NewVideo.module.scss'

// mocks
import { data } from '../../utils/mock'
import { loadAppData, saveAppData } from '../../utils/utils'


export default function ScreenNewVideo() {
    const router = useRouter()

    const [appData, setAppData] = useState({})
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('')
    const [videoLink, setVideoLink] = useState('https://youtu.be/video_id')
    const [selectedCategorie, setSelectedCategorie] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        const loadedAppData = loadAppData()
        setCategories(loadedAppData.categories.map((categorie, index) => ({
            title: categorie.title,
            index
        })))
        setAppData(loadedAppData)
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        appData.categories[selectedCategorie].videos.push({
            title,
            url: videoLink,
            description,
        })
        saveAppData(appData)
        alert('Vídeo adicionado com sucesso!')
        router.push('/')
    }

    return (
        <div className={ styles.pageContainer }>
            <PageTitle>
                Novo vídeo
            </PageTitle>

            <Header>
                <ButtonLink color="black" as="link">
                    <Link href="/new-category">
                        Nova categoria
                    </Link>
                </ButtonLink>
            </Header>

            <main>
                <h1>Novo vídeo</h1>

                <form onSubmit={ handleSubmit }>
                    <FormField labeltop={ title }>
                        <label htmlFor="id_title">
                            <input
                                autoComplete="on"
                                id="id_title"
                                onChange={ e => setTitle(e.target.value) }
                                required={ true }
                                type="text"
                            />

                            <span>
                                Título
                            </span>
                        </label>
                    </FormField>

                    <FormField labeltop={ videoLink }>
                        <label htmlFor="id_video_link">
                            <input
                                autoComplete="on"
                                id="id_video_link"
                                onChange={ e => setVideoLink(e.target.value) }
                                required={ true }
                                type="url"
                                value={ videoLink }
                            />

                            <span>Link do vídeo</span>
                        </label>
                    </FormField>

                    <FormField>
                        <select
                            required={ true }
                            defaultValue=""
                            onChange={ e => setSelectedCategorie(e.target.value) }
                        >
                            <option value="" disabled hidden>
                                -- Select a category --
                            </option>

                            { categories.map(categorie => (
                                <option
                                    key={ categorie.index }
                                    value={ categorie.index }>
                                    { categorie.title }
                                </option>
                            ))}
                        </select>
                    </FormField>

                    <FormField labeltop={ description }>
                        <label htmlFor="id_description">
                            <textarea
                                autoComplete="on"
                                id="id_description"
                                onChange={ e => setDescription(e.target.value) }
                                required={ true }
                                rows="5"
                            />

                            <span>Descrição</span>
                        </label>
                    </FormField>

                    <div className={ styles.buttonsContainer }>
                        <ButtonLink type="submit" color="red">
                            Salvar
                        </ButtonLink>

                        <ButtonLink type="button" as="link">
                            <Link href="/">
                                Cancelar
                            </Link>
                        </ButtonLink>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    )
}