import Image from 'next/image'
import styles from './Footer.module.scss'

const LOGO_URL = '/images/logo.svg'

export default function Footer() {
    return (
        <footer className={ styles.footer }>
            <Image src={ LOGO_URL } alt="Logo" width={ 200 } height={ 100 } />

            <p>Feito com carinho por ²Arruda</p>
        </footer>
    )
}