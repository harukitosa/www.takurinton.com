import { useEffect } from 'react'
import { useState } from 'react'
import { useContact } from '../../hooks/useContact'
import { ContactForm } from '../../component/contact/ContactForm'
import Modal from 'react-modal'
const css = require('../../styles/style/contact.scss')

const Contact = () => {
    const [modal, setModal] = useState<boolean>(false)
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
        setModal(true)
    }

    return (
        <div className={css.main}>
            <ContactForm state={state} onChange={onChange} onSubmit={onSubmit} />
            {/* @ts-ignore */}
            <Modal isOpen={modal} onRequestClose={() => setModal(false)}>
                <button onClick={() => setModal(false)}>閉じる</button>
            </Modal>
        </div>
    )
}

export default Contact