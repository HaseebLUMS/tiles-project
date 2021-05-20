import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import 'react-dropdown/style.css';
import '../css/App.css';

class TilesOptions extends Component {

    constructor(props) {
        super(props);
        this.state = { pictures: true };
        this.tileName = "../assets/rtile.png";
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
    console.log(picture);
        this.setState({
            pictures: false
        });
        this.tileName = "../assets/" + picture[0].name;
    }

    render() {

        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose Tile'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
                {
                    this.state.pictures || <img src={this.tileName} />
                }

                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

        );
    }
}
export default TilesOptions;
