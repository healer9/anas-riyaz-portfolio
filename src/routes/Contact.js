import React from 'react'
import Form from '../components/contact/Form'
import Message from '../components/contact/Message'
import '../components/contact/styles.css'

const Contact = () => {
    return (
        <div className="contact">
            <Form />
            <Message />
        </div>
    )
}

export default Contact