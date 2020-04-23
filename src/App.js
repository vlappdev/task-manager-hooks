import React, { Component } from 'react'
import { BrowserRouter, Switch, Route }from 'react-router-dom'
import Dashboard from './components/boards/Dashboard'
import AddNewTask from "./components/modal/AddNewTask"
import AppContext from './AppContext'
import data from './data/data';
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'

class App extends Component{
    constructor(){
        super();

        this.state = {
            ...data[0]
        };
    };

    updateAppState = value => {
        this.setState({
            ...value
        })
    };

    render(){
        console.log(this.state)
        return (
            <BrowserRouter>
                <div className="app d-flex flex-column">
                    <Navbar/>
                    <div className="d-flex flex-grow-1">
                        <SideMenu/>
                        <Switch>
                            <AppContext.Provider value="dafault string from provider">
                                <Route exact path='/' render={(routeProps) => (<Dashboard {...routeProps} passData={ this.state } updateApp={ this.updateAppState }/> )}
                                />
                                <Route path='/new-task'
                                       render={(routeProps) => (<AddNewTask {...routeProps} passData={ this.state } updateApp={ this.updateAppState } />)}
                                />
                            </AppContext.Provider>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
