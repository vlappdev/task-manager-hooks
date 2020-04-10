import React from 'react';
import iconManage from './assets/icon-manage.svg'
import iconBoards from './assets/icon-boards.svg'
import iconReports from './assets/icon-reports.svg'
import iconSchedule from './assets/icon-schedule.svg'
import iconAvatar from './assets/icon-avatar.svg'
import iconAddUser from './assets/icon-add-user.svg'
import iconDropDown from './assets/icon-drop-down.svg'
import iconMessage from './assets/icon-message.svg'
import iconAttach from './assets/icon-attach.svg'
import iconAddTask from './assets/icon-add-task.svg'
import iconSearch from './assets/icon-search.svg'
import iconMail from './assets/icon-mail.svg'
import iconAlert from './assets/icon-alert.svg'

function App() {
    return (
        <div className="app d-flex flex-column">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                <a className="navbar-brand text-white" href="#">hussle</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn my-2 my-sm-0" type="submit">
                            <img src={iconSearch} alt=""/>
                        </button>
                        <input className="form-control mr-sm-2 bg-transparent border-0 text-white shadow-none" type="search" placeholder="Search for task..." aria-label="Search"/>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link px-4" href="#">
                                <img src={iconMail} alt=""/>
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link px-4" href="#">
                                <img src={iconAlert} alt=""/>
                            </a>
                        </li>
                        <li className="nav-item dropdown d-flex align-items-center">
                            <p className="text-white mb-0 pl-4">Miki Maus</p>
                            <a className="nav-link dropdown-toggle pl-4" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={iconAvatar} alt=""/>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="d-flex flex-grow-1">
                <ul className="side-menu nav flex-column bg-white">
                    <li className="nav-item">
                        <a className="nav-link d-flex flex-column align-items-center active" href="#">
                            <img src={iconManage}/>
                            Manage
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link d-flex flex-column align-items-center" href="#">
                            <img src={iconBoards}/>
                            Boards
                        </a>
                    </li>
                    <li className="nav-item d-flex flex-column align-items-center">
                        <a className="nav-link d-flex flex-column align-items-center" href="#">
                            <img src={iconSchedule}/>
                            Schedule
                        </a>
                    </li>
                    <li className="nav-item d-flex flex-column align-items-center">
                        <a className="nav-link d-flex flex-column align-items-center" href="#">
                            <img src={iconReports}/>
                            Reports
                        </a>
                    </li>
                    <li className="nav-item d-flex flex-column align-items-center mt-auto">
                        <a className="nav-link d-flex flex-column align-items-center" href="#">
                            <img src={iconReports}/>
                            Reports
                        </a>
                    </li>
                </ul>
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
                                Add task
                                <img className="ml-2" src={iconAddTask}/>
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
                                Add task
                                <img className="ml-2" src={iconAddTask}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
