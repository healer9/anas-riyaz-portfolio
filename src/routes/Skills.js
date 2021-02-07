import React from 'react'
import '../components/skills/styles.css'
import cpp from '../components/skills/icons/c.svg'
import python from '../components/skills/icons/python-5.svg'
import javaScript from '../components/skills/icons/javascript.svg'
import react from '../components/skills/icons/react-2.svg'
import nodejs from '../components/skills/icons/nodejs.svg'
import mongodb from '../components/skills/icons/mongodb.svg'
import materialui from '../components/skills/icons/material-ui.svg'
import firebase from '../components/skills/icons/firebase.svg'
import vsCode from '../components/skills/icons/visual-studio-code.svg'
import git from '../components/skills/icons/git.svg'
import terminal from '../components/skills/icons/terminal.svg'
import github from '../components/skills/icons/github.svg'

const Skills = () => {
    return (
        <>
            <h1 style={{ 'margin': '2% 0' }}>Skills</h1>
            <div className="skill-container"
                style={{ 'color': '#F8F8F2' }}>
                <img className="skill-icon" src={cpp} alt="C++" />
                <img className="skill-icon" src={python} alt="C++" />
                <img className="skill-icon" src={javaScript} alt="C++" />
                <img className="skill-icon" src={react} alt="C++" />
                <img className="skill-icon" src={nodejs} alt="C++" />
                <img className="skill-icon" src={mongodb} alt="C++" />
                <img className="skill-icon" src={materialui} alt="C++" />
                <img className="skill-icon" src={firebase} alt="C++" />
                <img className="skill-icon" src={vsCode} alt="C++" />
                <img className="skill-icon" src={git} alt="C++" />
                <img className="skill-icon" src={github} alt="C++" />
                <img className="skill-icon" src={terminal} alt="C++" />
            </div>
        </>
    )
}

export default Skills