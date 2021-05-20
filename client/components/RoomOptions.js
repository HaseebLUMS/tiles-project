import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import 'react-dropdown/style.css';
import '../css/App.css';

class RoomOptions extends Component {

    constructor(props) {
        super(props);
        this.state = { pictures: true };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: false,
        });
    }

    render() {

        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose Room'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
                {
                    this.state.pictures || <img src="../assets/room1.png" width="700"/>
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
export default RoomOptions;
