import React, { Component } from 'react'
import { HashRouter, Switch, Route }from 'react-router-dom'
import TaskStatusContainer from './components/board/TaskStatusContainer'
import AddTask from "./components/board/AddTask"
import Navbar from './components/layout/Navbar'
import SideMenu from './components/layout/SideMenu'
import EditTask from './components/board/EditTask'
import Backlog from "./components/backlog/Backlog";
import AllTasksContainer from "./components/all_tasks/AllTasksContainer";

class App extends Component{

    state = {
        cardStatuses: [],
        cards:[]
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/jahorinac/data/03-hooks-react/03-hooks-react.json')
            .then(response =>{
                return response.json()
            })
            .then(data => {
                this.setState({...data[0]})
            })
    }

    updateAppState = value => {
        this.setState({
            ...value
        })
    };

    render(){
        return (
            <HashRouter>
                <div className="app d-flex flex-column">
                    <Navbar/>
                    <div className="d-flex flex-grow-1">
                        <SideMenu { ...this.state }/>
                        <Switch>
                            <Route exact path='/'>
                                <TaskStatusContainer passData={ this.state } updateApp={ this.updateAppState }/>
                            </Route>
                            <Route path='/new-task'>
                                <AddTask passData={ this.state } updateApp={ this.updateAppState } />
                            </Route>
                            <Route path='/edit/:id'>
                                <EditTask passData={this.state} updateApp={ this.updateAppState }/>
                            </Route>
                            <Route path="/backlog">
                                <Backlog { ...this.state }/>
                            </Route>
                            <Route path="/allTasks">
                                <AllTasksContainer { ...this.state }/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;
