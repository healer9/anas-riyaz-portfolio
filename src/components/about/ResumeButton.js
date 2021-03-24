import React from 'react'

const ResumeButton = () => {
    const handleClick = () => window.open('https://healer9.github.io/anas-riyaz-resume/')
    return (
        <button
            onClick={handleClick}
            className="resume">
            Resume
        </button>
    )
}

export default ResumeButton