import React, { Component } from "react"
import Task from "./Task";
import {Link} from "react-router-dom";
import { ReactComponent as IconManage } from "../../assets/icon-add-task.svg"


class TaskStatus extends Component{

    passRefElement = (param) => {
        this.props.getRef(param)
    };

    render() {
        return(
            <div className={ this.props.color + " p-3 border-top-3 border-top bg-light-gray rounded-lg d-flex flex-column align-items-stretch box-shadow"}>
                <h4 className="text-capitalize">{ this.props.title }</h4>
                <div className="flex-grow-1" ref={this.passRefElement}>
                    {
                        this.props.passCards.map((card, index) => {
                            return <Task key={ index } card={ card } setIdCard={this.props.appProp}/>
                        })
                    }
                </div>
                {
                    this.props.title === "to do" &&
                    <div className="text-center mt-4 mb-2">
                        <Link to='/new-task' className="add-task-link d-inline-flex align-items-center text-decoration-none">
                            Add task
                            <IconManage className="add-task-icon ml-2"/>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

export default TaskStatus