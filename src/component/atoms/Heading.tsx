import css from '../../styles/text.scss'

export const Heading = ({ text }) => {
    return (
        <div id={css.heading}>
            {text}
        </div>
    )
}