import React from "react";
import Song from "./Song";
import data from "./data";

class SongList extends React.Component {
    renderSongs = () => {
        return data.map((c) => (
            <Song key={c.id} songName={c.songName} artist={c.artist} year={c.year} />
        ))
    }
    render () {
        return (
            <table>
                <thead><tr>
                    <th>Song Name</th>
                    <th>Artist Name</th>
                    <th>Year Released</th>
                </tr></thead>
                <tbody>
                    {this.renderSongs()}
                </tbody>
            </table>
        )
    }
}

export default SongList