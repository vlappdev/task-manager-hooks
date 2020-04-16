import React, { Component } from 'react'
import Card from "./Card";
import {Link} from "react-router-dom";
import iconAddTask from "../assets/icon-add-task.svg";


class Board extends Component{

    constructor(props){
        super(props);
        this.state = {
            ...props
        }
    }

    update = cardId => {

        const notDeletedCards = this.state.cards.filter((item) => {
            return item.cardId !== cardId
        });

        this.setState({
            cards: notDeletedCards
        });
    };


    // setCards = () => {
    //     return this.props.cards.map((item, index) => {
    //         return <Card key={ index } cards={ item }/>
    //     })
    // };

    render() {
        return(
            <div className={this.state.color + " p-3 border-top-3 border-top rounded-lg"}>
                <h4>{this.state.titleBoard}</h4>
                {
                    this.state.cards.map((card, index) => {
                        return <Card key={ index } card={ card } setIdCard={ (id) => this.update(id) }/>
                    })
                }
                <div className="text-center mt-4 mb-2">
                    <Link to='/new-task'>Add task <img className="ml-2" src={iconAddTask} alt=''/></Link>
                </div>
            </div>
        )
    }
}

export default Board