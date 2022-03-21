import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// custom components
import ButtonLink from '../../components/ButtonLink'
import Footer from '../../components/Footer'
import FormField from '../../components/FormField'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'

// utils
import { loadAppData, saveAppData } from '../../utils/utils'

// styles
import styles from './NewCategory.module.scss'

const RED_DEFAULT = '#C62828'

export default function ScreenNewCategory() {
    const router = useRouter()

    const [appData, setAppData] = useState({})
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState(RED_DEFAULT)

    useEffect(() => {
        setAppData(loadAppData())
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        appData.categories.push({
            title,
            color,
            description,
            videos: []
        })
        saveAppData(appData)
        alert('Categoria adicionada com sucesso!')
        router.push('/')
    }

    return (
        <div className={ styles.pageContainer }>
            <PageTitle>
                Nova Categoria
            </PageTitle>

            <Header>
                <ButtonLink color="black" as="link">
                    <Link href="/">
                        Início
                    </Link>
                </ButtonLink>
            </Header>

            <main>
                <h1>Nova Categoria</h1>

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
                                Nome da categoria
                            </span>
                        </label>
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

                    <FormField>
                        <label htmlFor="id_color">
                            <input
                                autoComplete="on"
                                id="id_color"
                                onChange={ e => setColor(e.target.value) }
                                required={ true }
                                type="color"
                                value={ color }
                            />
                            <span>
                                Cor
                            </span>
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