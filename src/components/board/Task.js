import React, { Component } from 'react'
import Dropdown from './Dropdown'

import iconMessage from "../../assets/icon-message.svg";
import iconAttach from "../../assets/icon-attach.svg";
import iconAddUser from "../../assets/icon-add-user.svg";
import iconAvatar from "../../assets/icon-avatar.svg";


class Task extends Component{

    render() {

        const card = this.props.card;
        const priorityColor = card.priority.replace(' ', '-')

        return (
            <div className="task bg-white p-2 mt-3 box-shadow">
                <div className="d-flex justify-content-between">
                    < div className={ priorityColor + " text-white rounded-sm px-2 py-1 mb-auto"}>{ card.priority }</div>
                    <Dropdown cardId = {card.cardId} setIdCard={this.props.setIdCard}/>
                </div>
                <p className="mt-3">{ card.title }</p>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <img className="mr-1" src={ iconMessage } alt=""/>
                            <span>{ card.messages }</span>
                            <img className="mr-1 ml-3" src={ iconAttach } alt=""/>
                            <span>{ card.attachments }</span>
                        </div>
                    </div>
                    <div>
                        <img className="card-icon pr-2" src={ iconAddUser } alt=""/>
                        <img className="card-icon" src={ iconAvatar } alt=""/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Task