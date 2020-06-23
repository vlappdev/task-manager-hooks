Demo : https://vlappdev.github.io/task-manager-hooks

## Task Manager ( React app with Bootstrap )

![alt text](https://github.com/jahorinac/03-hooks-react/blob/master/src/assets/screenshot-app.jpg?raw=true)

### Installation / Development

```bash
    # clone project
    git clone <repo>
    cd project name
    
    # install dependecies
    npm install
    
    # start server
    npm start
```
Visit: http://localhost:3000

### Build / Production

```bash
    npm install gh-pages --save-dev
    npm run deploy
```

### Includes

- react v.16
- react-router-dom
- react-dragula
- bootstrap(used sass)
- node-sass

### Features

* Display tasks by status
* Add task
* Edit task
* Delete task
* Drag and drop task
* Display all tasks (pagination)

### Class components

 - TaskStatusContainer
 - TaskStatus
 - Task
 - Dropdown
 - Navbar (PureComponent)
 - SideMenu (PureComponent)
 
 ### Functional components (Hooks)
 
 - EditTask
 - AddTask
 - Backlog
 - AllTasksContainer
