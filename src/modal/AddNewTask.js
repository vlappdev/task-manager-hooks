import React, {Component} from'react'
import { Link }from 'react-router-dom';

class AddNewTask extends Component{
    render() {
        return (
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <form className="form-add-new-task w-100 position-relative">
                    <div className="form-group">
                        <label htmlFor="titleTask">Title task</label>
                        <input type="email" className="form-control" id="titleTask"
                               aria-describedby="emailHelp" placeholder="Enter title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionTask">Description task</label>
                        <textarea className="form-control" id="descriptionTask" rows="3" placeholder='Enter description'></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className='position-absolute back-button' to='/'>Back</Link>
                </form>
            </div>
        );
    }
}

export default AddNewTask