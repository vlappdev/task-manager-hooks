import React from 'react';
import { BrowserRouter, Switch, Route }from 'react-router-dom'
import Dashboard from './boards/Dashboard'
import iconManage from './assets/icon-manage.svg'
import iconBoards from './assets/icon-boards.svg'
import iconReports from './assets/icon-reports.svg'
import iconSchedule from './assets/icon-schedule.svg'
import iconAvatar from './assets/icon-avatar.svg'
import iconSearch from './assets/icon-search.svg'
import iconMail from './assets/icon-mail.svg'
import iconAlert from './assets/icon-alert.svg'
import AddNewTask from "./modal/AddNewTask";

function App() {
    return (
        <BrowserRouter>
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
                    <Switch>
                        <Route exact path='/' component={ Dashboard }/>
                        <Route path='/new-task' component={ AddNewTask }/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
