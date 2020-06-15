import React, { Component } from 'react'
import iconSearch from "../../assets/icon-search.svg";
import iconMail from "../../assets/icon-mail.svg";
import iconAlert from "../../assets/icon-alert.svg";
import iconAvatar from "../../assets/icon-avatar.svg";

class Navbar extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                <a className="navbar-brand text-white bg-purple p-0 m-0 col-sm-2" href="/">hussle</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse offset-sm-2" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn my-2 my-sm-0" type="submit">
                            <img src={iconSearch} alt=""/>
                        </button>
                        <input className="form-control mr-sm-2 bg-transparent border-0 text-white shadow-none" type="search" placeholder="Search for task..." aria-label="Search"/>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link px-4" href="/">
                                <img src={iconMail} alt=""/>
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link px-4" href="/">
                                <img src={iconAlert} alt=""/>
                            </a>
                        </li>
                        <li className="nav-item dropdown d-flex align-items-center">
                            <p className="text-white mb-0 pl-4">Miki Maus</p>
                            <a className="nav-link dropdown-toggle pl-4" href="/" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={iconAvatar} alt=""/>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar