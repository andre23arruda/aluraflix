import Link from 'next/link'
import PageTitle from '../../components/PageTitle'

import styles from './404.module.scss'

export default function Screen404() {
    return (
        <div className={ styles.pageContainer }>
            <PageTitle>
                404
            </PageTitle>

            <div>
                <h1>
                    404
                </h1>

                <h2>
                    This page could not be found
                </h2>
            </div>

            <Link href="/">
                Go back
            </Link>
        </div>

    )
}