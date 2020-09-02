import React from 'react'

export default class Song extends React.Component {
    render (){
        return (
        <div className='Song'>
            <h3>{this.props.title}</h3>
            <h4>{this.props.artist}</h4>
            <h4>{this.props.key}</h4>
        </div>
        )
    }
}