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

            <Image
                alt={ title }
                style={{ borderColor: borderColor || 'white' }}
                title={ title }
                src={`https://img.youtube.com/vi/${ videoId }/hqdefault.jpg`}
            />

        </a>
    )
}