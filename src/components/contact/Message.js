import React from 'react'
import logo from '../header/logo.png'

const Message = () => {
    return (
        <div className="message">
            <h1 style={{ 'fontSize': '4rem' }}>Let's Collaborate</h1>
            <img src={logo} alt="" />
            <p style={{
                'color': '#F2F2F8',
                'fontSize': '1.5rem', 'marginTop': '5%'
            }}>
                If you have any query, feel free to contact me.
            </p>
        </div>
    )
}

export default Message
