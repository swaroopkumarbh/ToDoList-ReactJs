import React, { Fragment, useState } from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskInput = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState("Low");

    const updateInputField = (event) => {
        let taskName = event.target.value;
        setInputValue(taskName);
        setPriority("Low")
    }
    const addTask = () => {

        if (inputValue)
            props.addNewTask(inputValue, priority);

        setInputValue('')
        setPriority('');
    };
    return (

        <Fragment >
            <div class="form-group">
                <input style={{ marginLeft: "1%" }} type="text" placeholder="Enter a Task" value={inputValue} onChange={updateInputField} />
                <button className="btn" onClick={() => { setPriority('High') }} style={{ marginLeft: "1%", backgroundColor: "red", color: "white" }}>High</button>
                <button className="btn" onClick={() => { setPriority('Medium') }} style={{ marginLeft: "1%", backgroundColor: "yellow", color: "black" }}>Medium</button>
                <button className="btn" onClick={() => { setPriority('Low') }} style={{ marginLeft: "1%", backgroundColor: "lightgrey", color: "black" }}>Low</button>
                <button className="btn" onClick={addTask} style={{ marginLeft: "1%" }}>{"➕"}</button>
            </div>

        </Fragment >
    );
};

export default TaskInput;