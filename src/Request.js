import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Modal} from 'react-bootstrap';
import ColourRatings from './ColourRatings';
import FactoryLogic from './Logic';
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
    }

    render(){
        return (
            <div>
                <div className="container mt-5 m-5">
                    <div className="row">
                        <div className="col-5 mx-auto">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <div className="row d-flex ">
                                        <Form.Label><h5>Request a colour:</h5></Form.Label>
                                        <div className="col-10 d-flex justify-content-end">
                                        <Form.Control type="text" placeholder="Enter colour" value={this.state.colour} onChange={this.handleChange} required></Form.Control>
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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ColourRatings colourRatings={"🔥 Trending"} colours={factory.filtering("trending")}/>
                        </div>
                        <div className="col">
                            <ColourRatings colourRatings={"😎 Popular"} colours={factory.filtering("popular")}/>
                        </div>
                        <div className="col">
                            <ColourRatings colourRatings={"🔝 Up and Coming Colours"} colours={factory.filtering("up and coming")}/>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
} 