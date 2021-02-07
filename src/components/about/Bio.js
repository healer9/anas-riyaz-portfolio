import React from 'react'
// import Profile from './Profile'
import ResumeButton from './ResumeButton'
import './styles.css'

const Bio = () => {
    return (
        <div className="bio-container">
            <h1 style={{
                'color': '#A6E22E',
                'borderBottom': '2px solid #A6E22E',
                'display': 'inline-block',
                'marginBottom': '2%'
            }}>
                About Me</h1>
            <p className="bio" style={{ 'color': '#F8F8F2' }}>
                Hii I'm Anas Riyaz, student by profession and creative by nature.
                Currently I'm pursuing my Bachelors in Computer Engineering.<br />
                &emsp;&emsp;I love to Design Responsive, Interactive, Scalable & User friendly websites in very
                efficient manner.
                I have a keen interset in learning & working with new technologies.
            </p>
            <h2 className="interset">Having Interest In</h2>
            <ul className="interset-list">
                <li style={{ 'color': '#F8F8F2' }}>Competitive Coding</li>
                <li style={{ 'color': '#F8F8F2' }}>Gaming</li>
                <li style={{ 'color': '#F8F8F2' }}>Reading</li>
                <li style={{ 'color': '#F8F8F2' }}>Travelling</li>
            </ul>
            {/* <Profile /> */}
            <div style={{ 'textAlign': 'center' }}>
                <ResumeButton />
            </div>
        </div>
    )
}

export default Bio