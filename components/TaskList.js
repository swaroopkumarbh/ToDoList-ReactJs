import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = (props) => {
    return (
        <Fragment>
            <ul>
                {

                    props.tasks.map((task, index) => {
                        const toggleTaskStatus = () => {
                            props.toggleStatus(index);
                        };
                        const deleteTask = () => {
                            props.deleteTask(index);
                        }
                        return (<li key={index} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "sans-serif", marginTop: "1%" }}><span onClick={toggleTaskStatus}>
                            {task.name} {task.priority} {task.isComplete ? "✅" : "❌"} </span><button class="btn btn-outline-danger" onClick={deleteTask}>Delete</button></li>
                        );
                    })
                }

            </ul>
        </Fragment >
    )
};

export default TaskList;