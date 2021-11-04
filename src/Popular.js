import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';

export default class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trending : [],
            loading : true
        }
    }

    static tableComponent(colours) {
        return (
            <div className="m-5">
                <h4>Popular Colours</h4>
                <br/>
                <div className="border rounded p-4" style={{"backgroundColor": "#D2F2FF", "borderColor": "#D2F2FF"}}>
                    <Table className="table table-hover table-striped text-center">
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
                                <td><button className="danger">Remove</button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

    render(){
        let content = Popular.tableComponent(this.state.trending);
        return(
            <div>
                {content}
            </div> 
        )
    }
}