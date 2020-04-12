import React, { Component } from 'react'
import Card from "./Card";
import {Link} from "react-router-dom";
import iconAddTask from "../assets/icon-add-task.svg";


class Board extends Component{

    render() {
        return(
            <div className={this.props.color + " p-3 border-top-3 border-top rounded-lg"}>
                <h4>{this.props.titleBoard}</h4>
                <Card/>
                <Card/>
                <div className="text-center mt-4 mb-2">
                    <Link to='/new-task'>Add task <img className="ml-2" src={iconAddTask} alt=''/></Link>
                </div>
            </div>
        )
    }
}

export default Board