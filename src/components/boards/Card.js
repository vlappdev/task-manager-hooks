import React, { Component } from 'react'
import iconMessage from "../../assets/icon-message.svg";
import iconAttach from "../../assets/icon-attach.svg";
import iconAddUser from "../../assets/icon-add-user.svg";
import iconAvatar from "../../assets/icon-avatar.svg";


class Card extends Component{

    removeCard = (id) => {
        this.props.setIdCard(id);
    };

    render() {

        const card = this.props.card;

        return (
            <div className="bg-white p-2 mt-3">
                <button onClick={ () => this.removeCard(card.cardId) } type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className={ card.color + " text-white rounded-sm px-2 py-1"}>{ card.priority }</div>
                <p className="mt-3">{ card.title }</p>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <img className="mr-1" src={ iconMessage }/>
                            <span>{ card.messages }</span>
                            <img className="mr-1 ml-3" src={ iconAttach }/>
                            <span>{ card.attachments }</span>
                        </div>
                    </div>
                    <div>
                        <img className="card-icon pr-2" src={ iconAddUser }/>
                        <img className="card-icon" src={ iconAvatar }/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card