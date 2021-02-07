import React from 'react'
import './styles.css'

const Greeting = () => {
    return (
        <div className="greeting">
            <h3>Hi, I'm</h3>
            <h1 className="my-name">Anas <span className="sname">Riyaz</span></h1>
            <h3 className="job">
                <span style={{ 'color': '#F8F8F2' }}>{'<>'}</span>
                    Web Developer
                <span style={{ 'color': '#F8F8F2' }}>{'</>'}</span>
            </h3>
        </div>
    )
}

export default Greeting