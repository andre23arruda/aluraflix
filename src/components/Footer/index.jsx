import styles from './Footer.module.scss'

const LOGO_URL = './images/logo.svg'

export default function Footer() {
    return (
        <footer className={ styles.footer }>
            <img src={ LOGO_URL } alt="Logo"  />

            <p>Feito com carinho por ²Arruda</p>
        </footer>
    )
}