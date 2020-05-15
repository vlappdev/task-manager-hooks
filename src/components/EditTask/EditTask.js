import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class EditTask extends Component {

    state = {
        cardId: '',
        priority: '',
        title:'',
        messages: '',
        attachments: '',
        status: ''
    };

    componentDidMount() {

        const cardForEdit = this.props.passData.cards.filter(card => {
            return card.cardId == this.props.match.params.id
        })[0];

        this.setState({
            ...cardForEdit
        })
    }

    editCard = () => {

        const id = this.state.cardId;
        const currentCards = this.props.passData.cards

        const indexForEditedCard = currentCards.findIndex(card => card.cardId === id)
        currentCards[indexForEditedCard] = this.state;

        this.props.updateApp(currentCards)
    };

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.editCard()
        this.props.history.push('/');
        console.log(this.props)
    };

    render() {
        return (
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <form onSubmit={this.handleSubmit} className="form-add-new-task w-100 position-relative">
                    <h3 className="text-center ">Edit task</h3>
                    <div className="form-group mt-5">
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
                               value={this.state.title}
                               onChange={this.handleOnChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary text-white">Edit task</button>
                </form>
            </div>
        );
    }
}

export default withRouter(EditTask);