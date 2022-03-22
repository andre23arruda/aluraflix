import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

const LOGO_URL = '/images/logo.svg'

export default function Header({ children }) {
    return (
        <header className={ styles.header }>
            <Link href="/" passHref>
                <a title="Voltar ao início">
                    <Image src={ LOGO_URL } alt="Logo" width={ 150 } height={ 100 } />
                </a>
            </Link>

            { children }
        </header>
    )
}