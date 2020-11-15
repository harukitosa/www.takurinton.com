import { useEffect } from 'react'
import { useContact } from '../../hooks/useContact'
import { ContactForm } from '../../component/contact/ContactForm'
import { Heading } from '../../component/common/atoms/Heading'
const css = require('../../styles/style/contact.scss')

const Contact = () => {
    const {
        handleChange, 
        handleSubmit, 
        state
    } = useContact()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(state)
    }

    return (
        <div className={css.main}>
            <ContactForm state={state} onChange={onChange} onSubmit={onSubmit} />
        </div>
    )
}

export default Contact