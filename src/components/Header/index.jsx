import Link from 'next/link'

import styles from './Header.module.scss'

const LOGO_URL = './images/logo.svg'

export default function Header({ children }) {
    return (
        <header className={ styles.header }>
            <Link href="/" passHref>
                <a title="Voltar ao início">
                    <img src={ LOGO_URL } alt="Logo" />
                </a>
            </Link>

            { children }
        </header>
    )
}