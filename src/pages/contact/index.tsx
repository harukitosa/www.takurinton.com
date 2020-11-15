import { useEffect } from 'react'
import { useContact } from '../../hooks/useContact'
import { ContactForm } from '../../component/contact/ContactForm'

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
        <ContactForm state={state} onChange={onChange} onSubmit={onSubmit} />
    )
}

export default Contact