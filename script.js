import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import TitleElement from './components/TitleElement'
import TaskCount from './components/TaskCount';

const App = () => {
    const [tasks, setTasks] = useState([
        { name: "Send Email", isComplete: true, priority: "High" },
        { name: "Cook Food", isComplete: false, priority: "Medium" },
        { name: "Renew Passport", isComplete: true, priority: "Low" }
    ]);

    const lowPriorityTasks = tasks.filter(task => task.priority == "Low");
    const mediumPriorityTasks = tasks.filter(task => task.priority == "Medium");
    const highPriorityTasks = tasks.filter(task => task.priority == "High");
    const completedTasks = tasks.filter(task => task.isComplete == true);
    const pendingTasks = tasks.filter(task => task.isComplete != true);

    const lowPriorityTasksCount = lowPriorityTasks.length;
    const mediumPriorityTasksCount = mediumPriorityTasks.length;
    const highPriorityTasksCount = highPriorityTasks.length;
    const completedTasksCount = completedTasks.length;
    const pendingTasksCount = pendingTasks.length;

    const toggleStatus = (toggleIndex) => {
        setTasks(
            tasks.map((task, index) => {
                if (toggleIndex === index) {
                    return { ...task, isComplete: !task.isComplete }
                }

                return task;
            })
        );
        ;
    }

    const addNewTask = (name, priority) => {
        let newTask = { name, isComplete: false, priority };
        setTasks([...tasks, newTask]);

    }

    const deleteTask = (deletedId) => {
        setTasks(tasks.filter((task, index) => deletedId !== index));
    }

    return (
        <Fragment>
            <TitleElement name="ToDo List" />
            <TaskCount high={highPriorityTasksCount} medium={mediumPriorityTasksCount} low={lowPriorityTasksCount} completed={completedTasksCount} pending={pendingTasksCount} />
            <TaskInput addNewTask={addNewTask} />
            <TaskList tasks={tasks} toggleStatus={toggleStatus} deleteTask={deleteTask} />
        </Fragment>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));