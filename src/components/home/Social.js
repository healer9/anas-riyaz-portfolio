import React from 'react'

const Social = () => {
    return (
        <footer>
            <i onClick={() => window.open('https://www.linkedin.com/in/anas-riyaz/')}
                className="fa fa-linkedin-square"></i>
            <i onClick={() => window.open('https://github.com/healer9')}
                className="fa fa-github"></i>
            <i onClick={() => window.location = 'mailto:anasriyaz92@gmail.com'}
                className="fa fa-envelope"></i>
        </footer>
    )
}

export default Social