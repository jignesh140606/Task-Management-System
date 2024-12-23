let tasks = [];

const addTask = (title, status, priority) => {
    const task = { title, status, priority };
    tasks.push(task);
    renderTasks(); 
};

const filterTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
};

const filterHighPriorityTasks = () => {
    return tasks.filter(task => task.priority === 5);
};

const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.title} (Priority: ${task.priority}) - Status: ${task.status}`;
        taskList.appendChild(taskItem);
    });
};


const renderTaskDetails = (tasksToDisplay) => {
    const taskDetails = document.getElementById('taskDetails');
    taskDetails.innerHTML = ''; // Clear current details

    tasksToDisplay.forEach(task => {
        const taskDetail = document.createElement('li');
        taskDetail.textContent = `${task.title} - Status: ${task.status} - Priority: ${task.priority}`;
        taskDetails.appendChild(taskDetail);
    });
};

document.getElementById('addTaskBtn').addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value;
    const status = document.getElementById('taskStatus').value;
    const priority = parseInt(document.getElementById('taskPriority').value, 10);

    if (title && status && priority >= 1 && priority <= 5) {
        addTask(title, status, priority);
    } else {
        alert('Please fill in all fields with valid values.');
    }
});


document.getElementById('showPending').addEventListener('click', () => {
    const pendingTasks = filterTasksByStatus('Pending');
    renderTaskDetails(pendingTasks);
});

document.getElementById('showCompleted').addEventListener('click', () => {
    const completedTasks = filterTasksByStatus('Completed');
    renderTaskDetails(completedTasks);
});


document.getElementById('showHighPriority').addEventListener('click', () => {
    const highPriorityTasks = filterHighPriorityTasks();
    renderTaskDetails(highPriorityTasks);
});


renderTasks();