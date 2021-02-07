import React from 'react'
import Greeting from './Greeting'
import Svg from './Svg'
import Social from './Social'
import './styles.css'

const Home = () => {
    return (
        <>
            <main>
                <Greeting />
                <Svg />
            </main>
            <Social />
        </>
    )
}

export default Home