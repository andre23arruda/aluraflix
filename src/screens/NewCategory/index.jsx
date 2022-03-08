import Link from 'next/link'

// custom components
import ButtonLink from '../../components/ButtonLink'
import Footer from '../../components/Footer'
import FormField from '../../components/FormField'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'

import styles from './NewCategory.module.scss'

export default function ScreenNewCategory() {
    return (
        <>
            <PageTitle>
                Nova categoria
            </PageTitle>

            <Header>
                <ButtonLink color="black" as="link">
                    <Link href="/">
                        Início
                    </Link>
                </ButtonLink>
            </Header>

            <main className={ styles.newCategoryPage }>
                <h1>Nova categoria</h1>

                <form>
                    <FormField
                        placeholder="Título"
                    />

                    <FormField
                        as="textarea"
                        placeholder="Descrição"
                    />

                    <FormField
                        as="select"
                        placeholder="Cor"
                    >
                        <option>teste 1</option>
                        <option>teste 2</option>
                        <option>teste 3</option>
                    </FormField>

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