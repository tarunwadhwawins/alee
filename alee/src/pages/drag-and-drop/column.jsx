import React from 'react';
import Task from './task';

const Container = theme => ({
    div: {
        border: "1px solid grey"
    },
});
const Title = theme => ({
    div: {
        padding: "8px"
    },
});
const TaskList = theme => ({
    div: {
        padding: "8px"
    },
});

function Column(props) {
         
    return (
        <Container>
            <Title>{props.column.title}</Title>
            <TaskList>
                {props.tasks.map(task => <Task key={task.id} task={task} />)}
            </TaskList>
        </Container>
    )
}
export default Column;