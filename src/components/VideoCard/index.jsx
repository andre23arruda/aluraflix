import styles from './VideoCard.module.scss'

export default function VideoCard({ children, ...props }) {
    return (
        <div
            className={`${ styles.videoCard } ${ styles[props.border] }`}
            {...props}
        >
            {/* <img src="https://i.ytimg.com/vi/pig9ygct154/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMtLb2FFKVG1Y7acT1SpE9RwZ9nA" alt="Video title" /> */}
        </div>
    )
}