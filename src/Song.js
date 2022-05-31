import React from "react";

class Song extends React.Component {
    render() {
        return (
            <tr className="row">
                <td className="cell">{this.props.songName}</td>
                <td className="cell">{this.props.artist}</td>
                <td className="cell">{this.props.year}</td>
            </tr>
        )
    }
}

export default Song