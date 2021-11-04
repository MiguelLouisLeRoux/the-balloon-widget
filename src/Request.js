import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form} from 'react-bootstrap';

export default class Request extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            colour : "",
        }
    }

    render(){
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <Form>
                            <Form.Group>
                                <Form.Label><h5>Request a colour:</h5></Form.Label>
                                <Form.Select>
                                    <option>Select</option>
                                    <option>Blue</option>
                                    <option>Red</option>
                                    <option>Pink</option>
                                    <option>White</option>
                                    <option>Black</option>
                                    <option>Orange</option>
                                    <option>Purple</option>
                                    <option>Yellow</option>
                                    <option>Green</option>
                                </Form.Select>
                                <button type="submit" className="btn btn-primary mb-3 mt-3">Request</button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
} 