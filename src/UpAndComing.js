import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Button } from 'react-bootstrap';
import FactoryLogic from "./Logic";
const factory = FactoryLogic();

export default class UpAndComing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trending : [],
            loading : true
        }
    }

    componentDidMount() {
        this.setState({trending : factory.filtering('up and coming')});
    }

    static tableComponent(colours) {
        return (
            <div className="m-5">
                <h4>🔝 Up and Coming Colours</h4>
                <br/>
                <div className="border rounded p-4" style={{"backgroundColor": "#D2F2FF", "borderColor": "#D2F2FF"}}>
                    <Table className="table table-hover text-center">
                        <thead>
                        <tr>
                            <th>Colour</th>
                            <th>Requests</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {colours.map(colourElem =>
                            <tr>
                                <td>{colourElem.colour}</td>
                                <td>{colourElem.requests}</td>
                                <td><Button className="btn btn-danger btn-sm">Remove</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

    render(){
        let content = UpAndComing.tableComponent(this.state.trending);
        return(
            <div>
                {content}
            </div> 
        )
    }
}