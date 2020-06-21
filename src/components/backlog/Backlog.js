import React, { useEffect, useState } from 'react';

function Backlog(props) {

    const [tasksInBacklog, setTasksInBacklog] = useState([]);

    useEffect(()=>{
        const tasks = props.cards.filter((task) => {
            return task.status === 'backlog'
        });

        setTasksInBacklog(tasks);
    }, [props.cards]);

    return (
        <div className="backlog w-100 px-5 py-4">
            <div className="pb-4">
                <div>
                    <h2>Backlog</h2>
                </div>
            </div>
            <ul className="list-group">
                {
                    tasksInBacklog.map( task => {
                        return <li className={`list-group-item ${task.priority.replace(" ", "-")}`}
                                   key={task.cardId}>
                                    { task.title }
                                </li>
                    })
                }
            </ul>
        </div>

    );
}

export default Backlog;