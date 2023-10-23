const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


//Собираем элемент
function createTaskElement(taskText) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = taskText;
    taskElement.addEventListener('click', () => {
        taskElement.style.color = 'green';
    });
    return taskElement;
}

//Добавляем элемент
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
    alert('Предложение добавлено');
}


addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

//Удаляем элементы
function deleteCompletedTasks() {
    const completedTasks = document.querySelectorAll('.task');
    completedTasks.forEach(task => {
        task.remove();
    });
}

//Кнопка удаления
document.addEventListener('DOMContentLoaded', () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить все предложения';
    deleteBtn.addEventListener('click', deleteCompletedTasks);
    document.body.appendChild(deleteBtn);
    alert('Все предложения удалены');
});
