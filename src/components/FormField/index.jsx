import styles from './FormField.module.scss'

export default function FormField({ children, as, ...props }) {
    const Tag = as || 'input'
    return (
        <Tag
            className={`${ styles.formField } ${ styles[props.border] }`}
            {...props}
        >
            { children }
        </Tag>

    )
}