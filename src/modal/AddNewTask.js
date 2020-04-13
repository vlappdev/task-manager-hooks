import React, {Component} from'react'
import { Link }from 'react-router-dom';


class AddNewTask extends Component{

    state = {
        taskTitle:'Enter task title'
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.propFromApp(this.state.taskTitle)

        this.setState({
            taskTitle:''
        })
    }

    handleInput = (e) => {
        this.setState({
            taskTitle: e.target.value
        })
    }

    render() {
        return (
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <form onSubmit={this.handleSubmit} className="form-add-new-task w-100 position-relative">
                    <div className="form-group">
                        <label htmlFor="titleTask">Title task</label>
                        <input type="text"
                               className="form-control"
                               id="titleTask"
                               value={this.state.taskTitle}
                               onChange={this.handleInput}/>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="descriptionTask">Description task</label>*/}
                    {/*    <textarea className="form-control" id="descriptionTask" rows="3" placeholder='Enter description'></textarea>*/}
                    {/*</div>*/}
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className='position-absolute back-button' to='/'>Back</Link>
                </form>
            </div>
        );
    }
}

export default AddNewTask