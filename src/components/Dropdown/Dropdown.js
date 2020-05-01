import React, {Component} from 'react';
import iconTreeDots from "../../assets/icon-three-dots.svg";
import {Link} from "react-router-dom";

class Dropdown extends Component {
    constructor(){
        super();

        this.state = {
            displayMenu: false,
        };
    }

    showDropdownMenu = (event) => {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    };

    hideDropdownMenu = () => {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    };

    removeCard = (id) => {
        this.props.setIdCard(id);
    };

    render() {
        return (
            <div  className="dropdown">
                <div className="btn p-0" onClick={this.showDropdownMenu}>
                    <img className="icon-three-dots" src={ iconTreeDots } alt=""/>
                </div>

                { this.state.displayMenu ? (
                        <div className="dropdown-menu d-block task-dropdown">
                            <Link to={"edit/" + this.props.cardId} className="dropdown-item">Edit</Link>
                            <Link to="/" onClick={ () => this.removeCard(this.props.cardId) } className="dropdown-item">Delete</Link>
                        </div>
                    ):
                    (
                        null
                    )
                }

            </div>
        );
    }
}

export default Dropdown;
