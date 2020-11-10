import css from '../../styles/text.scss'

export const Heading = ({ text }) => {
    return (
        <text id={css.heading}>
            {text}
        </text>
    )
}