import React, { Component } from 'react'
import Card from "./Card";
import {Link} from "react-router-dom";
import iconAddTask from "../../assets/icon-add-task.svg";


class Board extends Component{

    // setCards = () => {
    //     return this.props.cards.map((item, index) => {
    //         return <Card key={ index } cards={ item }/>
    //     })
    // };

    passRefElement = (param) => {
        this.props.getRef(param)
    };

    render() {
        return(
            <div className={ this.props.color + " p-3 border-top-3 border-top bg-light-gray rounded-lg d-flex flex-column align-items-stretch box-shadow"}>
                <h4>{ this.props.title }</h4>
                <div className="flex-grow-1" ref={this.passRefElement}>
                    {
                        this.props.passCards.map((card, index) => {
                            return <Card key={ index } card={ card } setIdCard={this.props.appProp}/>
                        })
                    }
                </div>
                <div className="text-center mt-4 mb-2">
                    <Link to='/new-task'>Add task <img className="ml-2" src={iconAddTask} alt=''/></Link>
                </div>
            </div>
        )
    }
}

export default Board