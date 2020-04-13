import React, {Component} from 'react'
import iconMessage from "../assets/icon-message.svg";
import iconAttach from "../assets/icon-attach.svg";
import iconAddUser from "../assets/icon-add-user.svg";
import iconAvatar from "../assets/icon-avatar.svg";


class Card extends Component{
    render() {
        return (
            <div className="bg-white p-2 mt-3">
                <div className={this.props.cards.color + " low-priority text-white rounded-sm px-2 py-1"}>{this.props.cards.priority}</div>
                <p className="mt-3">{this.props.cards.title}</p>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <img className="mr-1" src={iconMessage}/>
                            <span>{this.props.cards.messages}</span>
                            <img className="mr-1 ml-3" src={iconAttach}/>
                            <span>{this.props.cards.attachments}</span>
                        </div>
                    </div>
                    <div>
                        <img className="card-icon pr-2" src={iconAddUser}/>
                        <img className="card-icon"src={iconAvatar}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card