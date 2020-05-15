import React, { Component }from 'react'
import { ReactComponent as IconManage} from "../assets/icon-manage.svg";
import { ReactComponent as IconBoards} from "../assets/icon-boards.svg";
import { ReactComponent as IconSchedule} from "../assets/icon-schedule.svg";
import { ReactComponent as IconReports} from "../assets/icon-reports.svg";

class SideMenu extends Component{
    render() {
        return (
            <ul className="side-menu nav flex-column bg-white">
                <li className="nav-item">
                    <a className="nav-link d-flex flex-column align-items-center active text-gray" href="#">
                        <IconManage className='side-menu-icon'/>
                        Manage
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link d-flex flex-column align-items-center text-gray" href="#">
                        <IconBoards className='side-menu-icon'/>
                        Boards
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-flex flex-column align-items-center text-gray" href="#">
                        <IconSchedule className='side-menu-icon'/>
                        Schedule
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-flex flex-column align-items-center text-gray" href="#">
                        <IconReports className='side-menu-icon'/>
                        Reports
                    </a>
                </li>
                <li className="nav-item mt-auto">
                    <a className="nav-link d-flex flex-column align-items-center text-gray" href="#">
                        <IconReports className='side-menu-icon'/>
                        Reports
                    </a>
                </li>
            </ul>
        )
    }
}

export default SideMenu