import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Modal, Button} from 'react-bootstrap';
import ColourRatings from './ColourRatings';
import FactoryLogic from './Logic';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import TimelimitModal  from "./TimelimitModal";
import { IoBalloon } from 'react-icons/io5';
import CssColourList from './cssColours'
const factory = FactoryLogic();


export default class Request extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            colour : '',
            submit: '',
            timeLimit : 5,
            showHideRequestModal : false,
            colourSelectedForUpdate : '',
            cssColourNameSelectedForUpdate : '',
            colourRequestSelectedForUpdate : '',
            colourRequestUpdateChange : '',
            colourRequestUpdateSubmitHandle : '',
            trendList : factory.filtering("trending"),
            popList : factory.filtering("popular"),
            upList : factory.filtering("up and coming"),
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.timeLimitModal = this.timeLimitModal.bind(this);
        this.handleRequestModalShowHide = this.handleRequestModalShowHide.bind(this);
        this.handleRequestUpdate = this.handleRequestUpdate.bind(this);
        this.colourRequestUpdateSubmit = this.colourRequestUpdateSubmit.bind(this);

        setInterval(()=>{ this.setState({
            trendList : factory.filtering("trending"),
            popList : factory.filtering("popular"),
            upList : factory.filtering("up and coming")})}, 1000)
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
        factory.timeLimit(this.state.timeLimit);
        this.setState({
            trendList : factory.filtering("trending"),
            popList : factory.filtering("popular"),
            upList : factory.filtering("up and coming")
        })
    }

    timeLimitModal(timeLimitVal){
        this.setState({timeLimit : timeLimitVal})
        factory.timeLimit(this.state.timeLimit);
        this.setState({
            trendList : factory.filtering("trending"),
            popList : factory.filtering("popular"),
            upList : factory.filtering("up and coming")
        })
    }

    handleRequestModalShowHide(cssVal, colVal, reqVal){
        this.setState({
            showHideRequestModal : !this.state.showHideRequestModal,
            cssColourNameSelectedForUpdate : cssVal,
            colourSelectedForUpdate : colVal,
            colourRequestSelectedForUpdate : reqVal
        })
    }

    handleRequestUpdate(event){
        this.setState({
            colourRequestUpdateChange : event.target.value
        })
    }
    
    colourRequestUpdateSubmit(event) {
        event.preventDefault()
        this.setState({
            colourRequestUpdateSubmitHandle : this.state.colourRequestUpdateChange
        })
        factory.updateRequest(this.state.cssColourNameSelectedForUpdate, this.state.colourRequestUpdateChange);
        this.setState({
            colourRequestSelectedForUpdate : this.state.colourRequestUpdateChange,
            trendList : factory.filtering("trending"),
            popList : factory.filtering("popular"),
            upList : factory.filtering("up and coming")
        })
    }

    render(){
        return (
            <div>
                <div className="container mt-2 d-flex justify-content-start">
                <TimelimitModal theTimeLimit={this.state.timeLimit} timeLimitFunction={this.timeLimitModal}/>
                <Modal show={this.state.showHideRequestModal}>
                    <Modal.Header>
                        <Modal.Title><IoBalloon color={this.state.cssColourNameSelectedForUpdate}/>{this.state.colourSelectedForUpdate} currently has {this.state.colourRequestSelectedForUpdate} requests.</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.colourRequestUpdateSubmit}>
                        <Form.Group>
                            <Modal.Body>Set new amount of requests: <Form.Control type="number" min="1" value={this.state.colourRequestUpdateChange} onChange={this.handleRequestUpdate} required></Form.Control></Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={()=>this.handleRequestModalShowHide()}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form.Group>
                    </Form>
                </Modal>
                </div>
                <div className="container mt-5 m-5">
                    <div className="row">
                        <div className="col-5 mx-auto">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <div className="row d-flex ">
                                        <Form.Label><h5>Request a colour:</h5></Form.Label>
                                        <div className="col-10 d-flex justify-content-end">
                                        <Form.Control data={CssColourList}  type="text" placeholder="Enter colour" value={this.state.colour} onChange={this.handleChange} required></Form.Control>
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
                            <ColourRatings colourRank={"🔥 Trending"} colours={this.state.trendList} myFunction={factory.removingColour} modalHandle={this.handleRequestModalShowHide}/>
                        </div>
                        <div className="col">
                            <ColourRatings colourRank={"😎 Popular"} colours={this.state.popList} myFunction={factory.removingColour} modalHandle={this.handleRequestModalShowHide}/>
                        </div>
                        <div className="col">
                            <ColourRatings colourRank={"🔝 Up and Coming Colours"} colours={this.state.upList} myFunction={factory.removingColour} modalHandle={this.handleRequestModalShowHide}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 