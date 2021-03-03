import React, { useState } from 'react'
import projectList from './ProjectList'
import Description from './Description'
import project1 from './images/project1.png'
import project2 from './images/project2.png'
import project3 from './images/project3.png'
import './styles.css'

const Collage = () => {
    const [projectNum, setProjectNum] = useState(0)
    const projectImg = [project1, project2, project3]
    const { name, category, source, live, build, description } = projectList[projectNum]

    const decrement = () => {
        if (projectNum === 0) { return }
        setProjectNum(projectNum - 1)
    }

    const increment = () => {
        if (projectNum === projectList.length - 1) { return }
        setProjectNum(projectNum + 1)
    }
    return (
        <>
            <div className="project-container">
                <Description name={name} category={category} source={source}
                    live={live} build={build} description={description}
                />
                <img onClick={() => window.open(live)}
                    className="project-img"
                    src={projectImg[projectNum]} alt="project" />
            </div>
            <div className="project-btn-container">
                <button onClick={decrement}
                    className="project-btn">&#8592; Prev</button>
                <button onClick={increment}
                    className="project-btn">Next &#8594;</button>
            </div>
        </>
    )
}

export default Collage