import styles from './FormField.module.scss'

export default function FormField({ children, as, ...props }) {
    return (
        <div
            className={`${ styles.formField } ${ props.labeltop ? styles.labeltop : ''}`}
            {...props}
        >
            { children }
        </div>

    )
}