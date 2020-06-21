import React, { Component }from 'react'
import { NavLink, Route } from 'react-router-dom'
import Backlog from '../backlog/Backlog';

import { ReactComponent as IconManage} from "../../assets/icon-manage.svg";
import { ReactComponent as IconBoards} from "../../assets/icon-boards.svg";
import { ReactComponent as IconSchedule} from "../../assets/icon-schedule.svg";
//import { ReactComponent as IconReports} from "../../assets/icon-reports.svg";
import AllTasksContainer from "../all_tasks/AllTasksContainer";

class SideMenu extends Component{
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
                    {/*<li className="nav-item">*/}
                    {/*    <NavLink to="/reports" activeClassName="active-link" className="nav-link d-flex flex-column align-items-center flex-column flex-lg-row pl-4" href="#">*/}
                    {/*        <IconReports className='side-menu-icon mr-3'/>*/}
                    {/*        Reports*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                </ul>
                <Route path="/backlog">
                    <Backlog { ...this.props }/>
                </Route>
                <Route path="/allTasks">
                    <AllTasksContainer { ...this.props }/>
                </Route>
            </>
        )
    }
}

export default SideMenu