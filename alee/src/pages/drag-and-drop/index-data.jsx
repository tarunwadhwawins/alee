import React, { useState } from "react";
import initialData from "./initial-data";
import Column from "./column";


function DragAndDrop() {
    const [state, setState] = useState(initialData);

    return (
        state.columnOrder.map(columnId => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
            return <column key={column.id} column={column} task={tasks} />
        })
    )
}
export default DragAndDrop;