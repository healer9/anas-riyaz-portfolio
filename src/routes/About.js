import React from 'react'
import Bio from '../components/about/Bio'
import anas from '../components/about/anas.png'
import '../components/about/styles.css'

const About = () => {
    return (
        <div className="about">
            <div className="anas-container">
                <img className="anas" src={anas} alt="anas" />
            </div>
            <Bio />
        </div>
    )
}

export default About