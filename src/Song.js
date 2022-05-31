import React from "react";
import data from "./data";

class Song extends React.Component {
    remove = (id) =>{
        data.forEach((current, index) => {
            if(current.id == id){
                data.splice(index, 1)
            }
        })
        this.props.props.setState(!this.props.props.state)
    };

    sortYear = () => {
        let jaSorted = [...data].sort((a,b)=> a.year - b.year)
        if(data == jaSorted){
            data.sort((a,b)=> b.year - a.year)
            this.props.props.setState(!this.props.props.state)
        }else{
        data.sort((a,b)=> a.year - b.year)
        this.props.props.setState(!this.props.props.state)}
    }

    render() {
        return (
            <tr className="row">
                <td className="cell" onClick={this.sortSong}>{this.props.songName}</td>
                <td className="cell" onClick={this.sortArtist}>{this.props.artist}</td>
                <td className="cell" onClick={this.sortYear}>{this.props.year}</td>
                <td><button onClick={() => this.remove(this.props.id)}>delete</button></td>
            </tr>
        )
    }
}

export default Song