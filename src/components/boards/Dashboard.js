import React, {Component} from 'react';
import Board from './Board'
import iconDropDown from "../../assets/icon-drop-down.svg";
import iconAvatar from "../../assets/icon-avatar.svg";
import iconAddUser from "../../assets/icon-add-user.svg";


class Dashboard extends Component{

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
                    { this.props.propApp.map((item, index) => {
                            return <Board key={ index } { ...item } />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Dashboard