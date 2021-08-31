debugger
const initialData = {
    tasks:
    {
        'task-1': { id: 'task-1', contnent: 'task-1' },
        'task-2': { id: "task-2", contnent: 'task-2' },
        'task-3': { id: "task-3", contnent: 'task-3' },
        'task-4': { id: "task-4", contnent: 'task-4' },
    },
    columns: {
        'column-1': {
            "id": 'column-1',
            'title': 'To-do',
            'taskId': ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['column-1']
}
export default initialData