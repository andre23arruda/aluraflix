import styles from './ButtonLink.module.scss'

export default function ButtonLink({ children, ...props }) {
    return (
        <button
            className={`${ styles.button } ${ styles[props.color] } ${ styles[props.as] }`}
            {...props}
        >
            { children }
        </button>

    )
}