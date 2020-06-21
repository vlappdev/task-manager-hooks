import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'


function AddTask(props) {

    const [newTask, setNewTask] = useState({
        cardId: null,
        priority: 'low priority',
        title:'',
        messages: 2,
        attachments: 1,
        status: 'backlog'
    });

    useEffect(() => {
        const currentCards = props.passData.cards;
        const newCardId = Math.max(...currentCards.map((card) => card.cardId)) + 1;

        setNewTask((newTask)=> {
            return {...newTask, cardId: newCardId}
        })
    }, [props.passData.cards]);

    const handleSubmit = (e) => {
        e.preventDefault();

        addNewTask();

        props.history.push('/')
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewTask( initTask  => ({...initTask, [name]: value}))
    };

    const addNewTask = () => {
        const data =  props.passData;
        const currentCards = data.cards;

        const index = currentCards.length;
        data.cards[index] = newTask;

        props.updateApp(data)
    };

    const handleBack = (e) => {
        e.preventDefault();
        props.history.push('/')
    };

    return (
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <form onSubmit={ handleSubmit } className="form-add-new-task w-100 position-relative">
                <h3 className="text-center ">Add new task</h3>
                <div className="form-group">
                    <label htmlFor="priority">Select priority</label>
                    <select className="form-control" onChange={ handleOnChange } name="priority" value={ newTask.priority} id="priority">
                        <option value="low priority">low priority</option>
                        <option value="med priority">med priority</option>
                        <option value="high priority">high priority</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="taskTitle">Title task</label>
                    <input type="text"
                           className="form-control"
                           id="taskTitle"
                           name="title"
                           value={ newTask.taskTitle }
                           onChange={ handleOnChange }/>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary text-white">Add new task</button>
                    <button onClick={ handleBack } className="btn text-primary border">Back</button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(AddTask)