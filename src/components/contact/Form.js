import React, { useState } from 'react'
import axios from 'axios'
import './styles.css'

const Form = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    })

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: 'https://formspree.io/' + process.env.REACT_APP_FORM_ID,
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    }

    return (
        <div className="form-container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-name">
                    <input style={{ 'width': '49%' }}
                        name="First Name"
                        placeholder="First Name"
                        type="text" required />
                    <input style={{ 'width': '49%' }}
                        name="Last Name"
                        placeholder="Last Name"
                        type="text" required />
                </div>
                <input style={{ 'width': '100%' }}
                    placeholder="Email"
                    name="Email"
                    type="email" required />
                <br />
                <textarea placeholder="Message"
                    style={{ 'width': '100%' }}
                    rows="10" cols="40"
                    name="Message" required></textarea>
                <button type="submit" className="submit-btn">Send</button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                )}
            </form>
        </div>
    )
}

export default Form