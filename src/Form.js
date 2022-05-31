import { render } from "@testing-library/react";
import React from "react";
import data from "./data";

class Form extends React.Component {
    state = {
        id:data.length++,
        songName:"",
        artist:"",
        year:""
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        data.push(this.state)
        this.setState({
            songName:"",
            artist:"",
            year:""
        })
        this.props.setState(!this.props.state)
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Add New Song</h2>
                <input label="Song Name"
                placeholder="song name"
                name="songName"
                value={this.state.songName}
                onChange={this.handleChange} 
                />
                <input label="Artist"
                placeholder="artist name"
                name="artist"
                value={this.state.artist}
                onChange={this.handleChange} 
                />
                <input label="Year Released"
                placeholder="year"
                name="year"
                value={this.state.year}
                onChange={this.handleChange} 
                />
                <button>Submit</button>
            </form>
        )
    };
};




export default Form