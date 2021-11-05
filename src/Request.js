import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form} from 'react-bootstrap';
import FactoryLogic from "./Logic";
const factory = FactoryLogic();

export default class Request extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            colour : '',
            submit: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            colour : event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
            this.setState({
            submit: this.state.colour
        });
        factory.requestColour(this.state.colour);
        console.log(this.state.colour)
    }

    render(){
        return (
            <div className="container mt-5 m-5">
                <div className="row">
                    <div className="col-5 mx-auto">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <div className="row d-flex ">
                                    <Form.Label><h5>Request a colour:</h5></Form.Label>
                                    <div className="col-10 d-flex justify-content-end">
                                    <Form.Select value={this.state.colour} onChange={this.handleChange}> 
                                        <option value="Select">Select</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Red">Red</option>
                                        <option value="Pink">Pink</option>
                                        <option value="White">White</option>
                                        <option value="Black">Black</option>
                                        <option value="Orange">Orange</option>
                                        <option value="Purple">Purple</option>
                                        <option value="Yellow">Yellow</option>
                                        <option value="Green">Green</option>
                                    </Form.Select>
                                    </div>
                                    <div className="col-2 d-flex justify-content-start">
                                    <button type="submit" className="btn btn-primary">Request</button>
                                    </div>
                                    </div>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        ) 
    }
} 