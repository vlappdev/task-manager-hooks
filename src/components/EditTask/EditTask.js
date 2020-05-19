import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'


function EditTask(props) {

    const initState = {
        title: '',
        priority:''
    };

    const [task, setTask] = useState(initState);

    useEffect(()=>{

        const cardForEdit = props.passData.cards.filter(card => {
            return card.cardId === Number(props.match.params.id)
        })[0];

        console.log(cardForEdit)

        setTask({
            ...cardForEdit
        })

    }, []);

    const editCard = () => {

        const id = task.cardId;
        const currentCards = props.passData.cards;

        const indexForEditedCard = currentCards.findIndex(card => card.cardId === id)
        currentCards[indexForEditedCard] = task;

        props.updateApp(currentCards)
    };

    const handleOnChange = (e) => {

        const {name, value} = e.target;
        setTask({...task, [name]: value})
    };

    console.log(task)

    const handleSubmit = (e) => {
        e.preventDefault();

        editCard();
        props.history.push('/');
    };

    return (
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <form onSubmit={ handleSubmit} className="form-add-new-task w-100 position-relative">
                <h3 className="text-center ">Edit task</h3>
                <div className="form-group mt-5">
                    <label htmlFor="priority">Select priority</label>
                    <select className="form-control" onChange={handleOnChange} name="priority" value={ task.priority} id="priority">
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
                           value={ task.title}
                           onChange={ handleOnChange}/>
                </div>
                <button type="submit" className="btn btn-primary text-white">Edit task</button>
            </form>
        </div>
    );
}

export default withRouter(EditTask);