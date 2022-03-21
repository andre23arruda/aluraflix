import { useEffect, useState } from 'react'
import Link from 'next/link'
import ButtonLink from '../ButtonLink'

// utils
import { getVideoId } from '../../utils/utils'

// styles
import styles from './MainVideo.module.scss'


export default function MainVideo({ data }) {
    const [videoId, setVideoId] = useState('')

    useEffect(() => {
        const match = getVideoId(data.url)
        setVideoId(match)
    }, [data])

    return (
        <section
            style={{
                backgroundImage: videoId ? `url(https://img.youtube.com/vi/${ videoId }/hqdefault.jpg)` : ''
            }}
            className={ styles.mainVideo }
        >
            <section>
                <div>
                    <h2>{ data.title }</h2>
                    <p>{ data.description || '' }</p>
                </div>

                <div>
                    <div className={ styles.iframeContainer }>
                        { videoId &&
                            <iframe
                                title={ data.title }
                                src={ `https://www.youtube.com/embed/${ videoId }` }
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={ true }
                            />
                        }
                    </div>
                </div>
            </section>

            <div className={ styles.buttonContainer }>
                <ButtonLink color="red" as="link">
                    <a href={ data.url || '#no-response' } target="_blank">
                        Assistir
                    </a>
                </ButtonLink>
            </div>

            <div className={ styles.filter } />

        </section>
    )
}