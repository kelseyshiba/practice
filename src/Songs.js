import React from 'react'
import Song from './song.js'

export default class Songs extends React.Component {
    
    state = {songs: []}
    
    componentDidMount(){
        fetch("http://localhost:3000/songs")
        .then(resp => resp.json())
        .then(json => this.setState({songs: json.data}))
    }

    renderSongs = () => {
        console.log(this.state)
        return this.state.songs.map(song=> {
            return (<Song title={song.attributes.title} artist={song.attributes.artist} key={song.attributes.key} />)
        })
    }

    render (){
        return (
            <div className="SongsForSchuyler">
                {this.renderSongs()}
            </div>
        )
    }


}

