import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'


function AddTask(props) {

    const [newTask, setNewTask] = useState({
        cardId: null,
        priority: 'low priority',
        title:'',
        messages: 2,
        attachments: 1,
        status: 'Backlog'
    });

    useEffect(() => {
        const currentCards = props.passData.cards;
        const newCardId = Math.max(...currentCards.map((card) => card.cardId)) + 1;
        setNewTask({...newTask, cardId: newCardId})
    }, []);

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

    return (
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <form onSubmit={ handleSubmit } className="form-add-new-task w-100 position-relative">
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
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="messages">Messages</label>*/}
                {/*    <select className="form-control" value={this.state.messages} id="messages">*/}
                {/*        <option>1</option>*/}
                {/*        <option>2</option>*/}
                {/*        <option>3</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="attachments">Attachments</label>*/}
                {/*    <select className="form-control" value={this.state.attachments} id="attachments">*/}
                {/*        <option>1</option>*/}
                {/*        <option>2</option>*/}
                {/*        <option>3</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="descriptionTask">Description task</label>*/}
                {/*    <textarea className="form-control" id="descriptionTask" rows="3" placeholder='Enter description'></textarea>*/}
                {/*</div>*/}
                <button type="submit" className="btn btn-primary text-white">Add new task</button>
            </form>
        </div>
    );
}

export default withRouter(AddTask)