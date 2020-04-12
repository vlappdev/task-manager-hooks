import React, {Component} from 'react';
import Board from './Board'
import iconDropDown from "../assets/icon-drop-down.svg";
import iconAvatar from "../assets/icon-avatar.svg";
import iconAddUser from "../assets/icon-add-user.svg";


class Dashboard extends Component{

    typeOfBoards = [
        { titleBoard:'Backlog', color: 'board-1' },
        { titleBoard:'In Progess', color: 'board-2' },
        { titleBoard:'Review', color: 'board-3' },
        { titleBoard:'Complete,', color: 'board-4' }
    ];

    // setTypeOfBoard = () => {
    //     return this.typeOfBoards.map((item, index) => {
    //         return <Board key={index} {...item} />
    //     })
    // };

    render(){
        return(
            <div className="board-container w-100 px-5 py-4">
                <div className="d-flex justify-content-between pb-4">
                    <div className="d-flex">
                        <h2>Studio Board</h2>
                        <img src={iconDropDown}/>
                    </div>
                    <div>
                        <img src={iconAvatar}/>
                        <img src={iconAvatar}/>
                        <img src={iconAvatar}/>
                        <img src={iconAvatar}/>
                        <img src={iconAvatar}/>
                        <img src={iconAddUser}/>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    { this.typeOfBoards.map((item, index) => {
                            return <Board key={index} {...item} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Dashboard