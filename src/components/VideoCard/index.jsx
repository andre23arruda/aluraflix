import Image from 'next/image'
import { getVideoId } from '../../utils/utils'

import styles from './VideoCard.module.scss'

export default function VideoCard({ children, borderColor, title, url, ...props }) {
    const videoId = getVideoId(url)

    return (
        <a
            className={`${ styles.videoCard }`}
            href={ url }
            alt={ title }
            target="_blank"
            rel="noreferrer"
            {...props}
        >
            <h4>{ title }</h4>

            <div className={ styles.imageContainer } style={{ borderColor: borderColor || 'white' }}>
                <Image
                    alt={ title }
                    title={ title }
                    src={`https://img.youtube.com/vi/${ videoId }/hqdefault.jpg`}
                    width={ 400 }
                    height={ 280 }
                />
            </div>

        </a>
    )
}