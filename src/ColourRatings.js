import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Button } from 'react-bootstrap';

export default function ColourRatings (props){

    return(
        <div className="m-5">
            <h4 className="mb-3">{props.colourRatings}</h4>
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
                    {props.colours.map(colourElem =>
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