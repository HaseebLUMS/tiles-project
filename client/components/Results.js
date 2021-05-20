import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import 'react-dropdown/style.css';
import '../css/App.css';
import {Button} from "react-bootstrap";

class Results extends Component {

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
                <br />
                <br />

                <Button onClick={this.onDrop}>Generate</Button>
                <br />
                <br />
                <br />


                {
                    this.state.pictures || <img src="../assets/wresult.png" width="700" />
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
export default Results;
