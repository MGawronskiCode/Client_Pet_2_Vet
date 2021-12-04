import React, {Component} from "react";
import {Button, Offcanvas} from "react-bootstrap";
import {MdOutlineNotes} from "react-icons/all";
import CanvasHeader from "./CanvasHeader";
import CanvasBody from "./CanvasBody";

export default class UserMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    <MdOutlineNotes/>
                </Button>

                <Offcanvas show={this.state.show} onHide={this.handleClose}>
                    <CanvasHeader title="Menu" />
                    <CanvasBody />
                </Offcanvas>
            </div>
        )
    }
}