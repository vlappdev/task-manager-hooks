import React from 'react';
import iconManage from './assets/icon-manage.svg'
import iconBoards from './assets/icon-boards.svg'
import iconReports from './assets/icon-reports.svg'
import iconSchedule from './assets/icon-schedule.svg'

function App() {
    return (
        <div className="app d-flex flex-column">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
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
                <div className="">
                    <div className="d-flex">
                        <h2>Studio Board</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
