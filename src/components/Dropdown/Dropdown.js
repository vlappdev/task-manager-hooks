import React, {Component} from 'react';
import iconTreeDots from "../../assets/icon-three-dots.svg";
import {Link, withRouter} from "react-router-dom";

class Dropdown extends Component {
    constructor(){
        super();

        this.state = {
            displayMenu: false,
        };
    }

    showDropdownMenu = (e) => {
        e.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    };

    hideDropdownMenu = (isDeleteLink) => {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);

            if(!isDeleteLink){
                this.props.history.push("edit/" + this.props.cardId)
            }
        });
    };

    redirectToEditCard = (e) => {
        e.preventDefault();
        this.hideDropdownMenu(!e.defaultPrevented)
    };

    removeCard = (evt, id) => {
        this.hideDropdownMenu(!evt.defaultPrevented);
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
                            <Link to="" onClick={this.redirectToEditCard} className="dropdown-item">Edit</Link>
                            <Link to="/" onClick={ (e) => this.removeCard(e, this.props.cardId) } className="dropdown-item">Delete</Link>
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

export default withRouter(Dropdown);
