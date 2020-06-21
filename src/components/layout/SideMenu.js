import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as IconManage} from "../../assets/icon-manage.svg";
import { ReactComponent as IconBoards} from "../../assets/icon-boards.svg";
import { ReactComponent as IconSchedule} from "../../assets/icon-schedule.svg";

class SideMenu extends PureComponent{
    render() {
        return (
            <>
                <ul className="side-menu nav flex-column bg-white col-sm-2 p-0 box-shadow">
                    <li className="nav-item">
                        <NavLink to="/backlog" activeClassName="active-link" className="active nav-link d-flex flex-column flex-lg-row align-items-center pl-4">
                            <IconManage className='side-menu-icon mr-3'/>
                            Backlog
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink exact to="/"  activeClassName="active-link" className="nav-link d-flex flex-column align-items-center flex-column flex-lg-row pl-4" href="#">
                            <IconBoards className='side-menu-icon mr-3'/>
                            Board
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/allTasks" activeClassName="active-link" className="nav-link d-flex flex-column align-items-center flex-column flex-lg-row pl-4" href="#">
                            <IconSchedule className='side-menu-icon mr-3'/>
                            All Tasks
                        </NavLink>
                    </li>
                </ul>
            </>
        )
    }
}

export default SideMenu