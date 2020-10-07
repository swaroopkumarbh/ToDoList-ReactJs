import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const taskStatus = ({ high, medium, low, completed, pending }) => {
    return (
        <Fragment>
            <p style={{ wordWrap: "break-word", textAlign: "center" }}>
                <b>High Priority Tasks: {high} Medium Priority Tasks: {medium} Low Priority Tasks: {low} Completed Tasks: {completed} Pending Tasks: {pending}</b>
            </p>
            <br />
        </Fragment>
    );
};

export default taskStatus;