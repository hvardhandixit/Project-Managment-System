import React from 'react';

class TaskForm extends React.Component{
    render(){
        return(
            <form>
                <div>
                    <label for="taskName">Task</label>
                    <input type="text" id="taskName" name="taskName" />
                </div>
                <div>
                    <label for="category">Category</label>
                    <input type="text" id="category" name="category" />
                </div>
                <div>
                    <label for="task-description">Task</label>
                    <input type="text" id="task-description" name="task-description" />
                </div>
            </form>
        )
    }
}

export default TaskForm;