import React from 'react'

const Description = (props) => {
    const linkStyle = {
        'color': '#F2F2F8',
        'borderBottom': '1px solid #F2F2F8',
        'cursor': 'pointer',
        'marginLeft': '5px'
    }
    return (
        <ul className="project-description">
            <p style={{ 'marginTop': '1%' }}>Name :
                <span style={{ 'color': '#F2F2F8', 'marginLeft': '5px' }}>{props.name}</span>
            </p>
            <p style={{ 'marginTop': '1%' }}>Category :
                <span style={{ 'color': '#F2F2F8', 'marginLeft': '5px' }}>{props.category}</span>
            </p>
            <p style={{ 'marginTop': '1%' }}>Source Code :
                <span onClick={() => window.open(props.source)}
                    style={linkStyle}>{props.source}</span>
            </p>
            <p style={{ 'marginTop': '1%' }}>Live At :
                <span onClick={() => window.open(props.live)}
                    style={linkStyle}>{props.live}</span>
            </p>
            <p style={{ 'marginTop': '1%' }}>Build With :
                <span style={{ 'color': '#F2F2F8', 'marginLeft': '5px' }}>{props.build}</span>
            </p>
            <p style={{ 'marginTop': '1%' }}>Description :
                <span style={{ 'color': '#F2F2F8', 'marginLeft': '5px' }}>{props.description}</span>
            </p>
        </ul>
    )
}

export default Description