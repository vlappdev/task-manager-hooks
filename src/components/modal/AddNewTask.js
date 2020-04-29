import React, {Component} from 'react'


class AddNewTask extends Component{

    constructor(props){
        super(props);

        this.state = {
            ...props.passData
        };

        const currentCards = this.state.cards;

        const initCard = {
                            cardId: null,
                            priority: 'low priority',
                            title:'Enter task title',
                            messages:2,
                            attachments:1,
                            status: 'Backlog'
                        };

        this.state.cards = [...currentCards, initCard]

    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.addNewTask();

        // this.setState({
        //     title:''
        // })

        this.props.history.push('/')
    };

    handleOnChange = (e) => {

        const cards = this.state.cards;

        const index = this.state.cards.length - 1;

        const initialCard = cards[index];
        const newCard = { [e.target.name]: e.target.value };

        cards[index]  = {...initialCard, ...newCard}

        this.setState({
            cards: cards
        });
    };

    addNewTask = () => {

        const cards = this.state.cards;

        const cardId = Math.max(...cards.map((card) => card.cardId)) + 1;

        this.setState( (prevState) =>{

            const index = prevState.cards.length - 1;

             return prevState.cards[index].cardId = cardId;

        });

        this.props.updateApp(this.state)
    };

    render() {
        console.log(this.props)
        return (
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <form onSubmit={this.handleSubmit} className="form-add-new-task w-100 position-relative">
                    <div className="form-group">
                        <label htmlFor="priority">Select priority</label>
                        <select className="form-control" onChange={this.handleOnChange} name="priority" value={this.state.priority} id="priority">
                            <option value="low priority">low priority</option>
                            <option value="med priority">med priority</option>
                            <option value="high priority">high priority</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskTitle">Title task</label>
                        <input type="text"
                               className="form-control"
                               id="taskTitle"
                               name="title"
                               value={this.state.taskTitle}
                               onChange={this.handleOnChange}/>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="messages">Messages</label>*/}
                    {/*    <select className="form-control" value={this.state.messages} id="messages">*/}
                    {/*        <option>1</option>*/}
                    {/*        <option>2</option>*/}
                    {/*        <option>3</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="attachments">Attachments</label>*/}
                    {/*    <select className="form-control" value={this.state.attachments} id="attachments">*/}
                    {/*        <option>1</option>*/}
                    {/*        <option>2</option>*/}
                    {/*        <option>3</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="descriptionTask">Description task</label>*/}
                    {/*    <textarea className="form-control" id="descriptionTask" rows="3" placeholder='Enter description'></textarea>*/}
                    {/*</div>*/}
                    <button type="submit" className="btn btn-primary">Add new task</button>
                </form>
            </div>
        );
    }
}

export default AddNewTask