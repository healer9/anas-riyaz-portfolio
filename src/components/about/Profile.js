import React from 'react'
import codechef from './icons/codechef.png'
import hackerrank from './icons/hackerrank.svg'
import './styles.css'

const Profile = () => {
    return (
        <div className="icon-container">
            <img onClick={() => window.open('https://www.codechef.com/users/almoizzu')}
                className="about-icon" src={codechef} alt="codechef" />
            <img onClick={() => window.open('https://www.hackerrank.com/anasriyaz92')}
                className="about-icon" src={hackerrank} alt="hackerrank" />
        </div>
    )
}

export default Profile