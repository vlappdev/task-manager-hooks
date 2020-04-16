import React, {Component} from 'react'
import { Link }from 'react-router-dom';


class AddNewTask extends Component{

    state = {
        priority: 'low priority',
        title:'Enter task title',
        messages:2,
        attachments:1,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.propFromApp(this.state);

        this.addNewTask();

        this.setState({
            title:''
        })
    };

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    addNewTask = () => {
        this.props.propData[0].cards.push(this.state)
    };

    render() {
        return (
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <form onSubmit={this.handleSubmit} className="form-add-new-task w-100 position-relative">
                    <div className="form-group">
                        <label htmlFor="priority">Select priority</label>
                        <select className="form-control" onChange={this.handleOnChange} name="priority" value={this.state.priority} id="priority">
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
                               value={this.state.taskTitle}
                               onChange={this.handleOnChange}/>
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
                    <button type="submit" className="btn btn-primary">Add new task</button>
                    <Link className='position-absolute back-button' to='/'>Back</Link>
                </form>
            </div>
        );
    }
}

export default AddNewTask