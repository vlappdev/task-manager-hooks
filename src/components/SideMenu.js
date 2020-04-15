import React, { Component }from 'react'
import iconManage from "../assets/icon-manage.svg";
import iconBoards from "../assets/icon-boards.svg";
import iconSchedule from "../assets/icon-schedule.svg";
import iconReports from "../assets/icon-reports.svg";

class SideMenu extends Component{
    render() {
        return (
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
        )
    }
}

export default SideMenu