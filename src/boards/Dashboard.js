import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import AddNewTask from './../modal/AddNewTask'
import iconDropDown from "../assets/icon-drop-down.svg";
import iconAvatar from "../assets/icon-avatar.svg";
import iconAddUser from "../assets/icon-add-user.svg";
import iconMessage from "../assets/icon-message.svg";
import iconAttach from "../assets/icon-attach.svg";
import iconAddTask from "../assets/icon-add-task.svg";

class Dashboard extends Component{
    render(){
        return(
            <div className="board-container w-100 px-5 py-4">
                <div className="d-flex justify-content-between pb-4">
                    <div className="d-flex">
                        <h2>Studio Board</h2>
                        <img src={iconDropDown}/>
                    </div>
                    <div>
                        <img src={iconAvatar}/>
                        <img src={iconAvatar}/>
                        <img src={iconAvatar}/>
                        <img src={iconAvatar}/>
                        <img src={iconAvatar}/>
                        <img src={iconAddUser}/>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="board-1 p-3 border-top-3 border-top rounded-lg">
                        <h4>Backlog</h4>
                        <div className="bg-white p-2 mt-3">
                            <div className="low-priority text-white rounded-sm px-2 py-1">Low Priority</div>
                            <p className="mt-3">Company website redesign.</p>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <div className="d-flex align-items-center">
                                        <img className="mr-1" src={iconMessage}/>
                                        <span>1</span>
                                        <img className="mr-1 ml-3" src={iconAttach}/>
                                        <span>2</span>
                                    </div>
                                </div>
                                <div>
                                    <img className="card-icon pr-2" src={iconAddUser}/>
                                    <img className="card-icon"src={iconAvatar}/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-2 mt-3">
                            <div className="med-priority text-white rounded-sm px-2 py-1">Low Priority</div>
                            <p className="mt-3">Company website redesign.</p>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <div className="d-flex align-items-center">
                                        <img className="mr-1" src={iconMessage}/>
                                        <span>1</span>
                                        <img className="mr-1 ml-3" src={iconAttach}/>
                                        <span>2</span>
                                    </div>
                                </div>
                                <div>
                                    <img className="card-icon pr-2" src={iconAddUser}/>
                                    <img className="card-icon"src={iconAvatar}/>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4 mb-2">
                            <Link to='/new-task'>Add task <img className="ml-2" src={iconAddTask}/></Link>
                        </div>
                    </div>
                    <div className="board-2 p-3 border-top-3 border-top rounded-lg">
                        <h4>In Progress</h4>
                        <div className="bg-white p-2 mt-3">
                            <div className="low-priority text-white rounded-sm px-2 py-1">Low Priority</div>
                            <p className="mt-3">Company website redesign.</p>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <div className="d-flex align-items-center">
                                        <img className="mr-1" src={iconMessage}/>
                                        <span>1</span>
                                        <img className="mr-1 ml-3" src={iconAttach}/>
                                        <span>2</span>
                                    </div>
                                </div>
                                <div>
                                    <img className="card-icon pr-2" src={iconAddUser}/>
                                    <img className="card-icon"src={iconAvatar}/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-2 mt-3">
                            <div className="low-priority text-white rounded-sm px-2 py-1">Low Priority</div>
                            <p className="mt-3">Company website redesign.</p>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <div className="d-flex align-items-center">
                                        <img className="mr-1" src={iconMessage}/>
                                        <span>1</span>
                                        <img className="mr-1 ml-3" src={iconAttach}/>
                                        <span>2</span>
                                    </div>
                                </div>
                                <div>
                                    <img className="card-icon pr-2" src={iconAddUser}/>
                                    <img className="card-icon"src={iconAvatar}/>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4 mb-2">
                            <Link to='/new-task'>Add task <img className="ml-2" src={iconAddTask}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard