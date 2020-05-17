import React, { Component }from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as IconManage} from "../assets/icon-manage.svg";
import { ReactComponent as IconBoards} from "../assets/icon-boards.svg";
import { ReactComponent as IconSchedule} from "../assets/icon-schedule.svg";
import { ReactComponent as IconReports} from "../assets/icon-reports.svg";

class SideMenu extends Component{
    render() {
        return (
            <ul className="side-menu nav flex-column bg-white">
                <li className="nav-item">
                    <NavLink to="/manage" activeClassName="active-link" className="nav-link d-flex flex-column align-items-center active">
                        <IconManage className='side-menu-icon'/>
                        Manage
                    </NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink exact to="/"  activeClassName="active-link" className="nav-link d-flex flex-column align-items-center" href="#">
                        <IconBoards className='side-menu-icon'/>
                        Boards
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/schedule" activeClassName="active-link" className="nav-link d-flex flex-column align-items-center" href="#">
                        <IconSchedule className='side-menu-icon'/>
                        Schedule
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/reports" activeClassName="active-link" className="nav-link d-flex flex-column align-items-center" href="#">
                        <IconReports className='side-menu-icon'/>
                        Reports
                    </NavLink>
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