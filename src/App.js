import React, { Component } from 'react'
import { BrowserRouter, Switch, Route }from 'react-router-dom'
import Dashboard from './boards/Dashboard'
import AddNewTask from "./modal/AddNewTask"
import AppContext from './AppContext'
import data from './data/data';
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'

class App extends Component{

    state = {
        setNewTask: {}
    };

    update = value => {
        this.setState({
            setNewTask: value
        })
    };

    render(){
        return (
            <BrowserRouter>
                <div className="app d-flex flex-column">
                    <Navbar/>
                    <div className="d-flex flex-grow-1">
                        <SideMenu/>
                        <Switch>
                            <AppContext.Provider value="dafault string from provider">
                                <Route exact path='/' render={(routeProps) => (<Dashboard {...routeProps} propApp={ data }/> )}
                                />
                                <Route path='/new-task'
                                       render={(routeProps) => (<AddNewTask {...routeProps} propFromApp={ this.update } propData={ data }/>)}
                                />
                            </AppContext.Provider>
                        </Switch>
                    </div>
                    <p>{this.state.setNewTask.priority}</p>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
