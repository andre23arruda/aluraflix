import Link from 'next/link'

// custom components
import ButtonLink from '../../components/ButtonLink'
import Footer from '../../components/Footer'
import FormField from '../../components/FormField'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'

import styles from './NewVideo.module.scss'

export default function ScreenNewVideo() {
    return (
        <>
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

            <main className={ styles.newVideoPage }>
                <h1>Novo vídeo</h1>

                <form>
                    <FormField
                        placeholder="Título"
                    />

                    <FormField
                        placeholder="Link do vídeo"
                        border="border-red"
                    />

                    <FormField
                        placeholder="Link da imagem do vídeo"
                        border="border-red"
                    />

                    <FormField
                        as="select"
                        placeholder="Escolha uma categoria"
                    >
                        <option>teste 1</option>
                        <option>teste 2</option>
                        <option>teste 3</option>
                    </FormField>

                    <FormField
                        as="textarea"
                        placeholder="Descrição"
                    />

                    <FormField
                        placeholder="Código de segurança"
                    />

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
        </>
    )
}