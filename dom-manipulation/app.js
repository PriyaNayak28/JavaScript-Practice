document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tasksContainer = document.querySelector('.tasks');
    const taskInput = document.getElementById('task-to-add');
    const taskDescInput = document.getElementById('task-desc');

    // Load tasks from localStorage
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(task => {
            addTaskToList(task.name, task.description);
        });
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = Array.from(tasksContainer.children).map(li => {
            return {
                name: li.querySelector('.task-name').textContent,
                description: li.querySelector('.task-desc').textContent
            };
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to the list
    function addTaskToList(taskName, description = '') {
        const newLi = document.createElement('li');
        newLi.className = 'task';
        newLi.innerHTML = `
            <span class="task-name">${taskName}</span>
            <button class="delete-btn">x</button><button class="edit-btn">edit</button>
            <p class="task-desc">${description}</p>
        `;
        tasksContainer.appendChild(newLi);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (taskInput.value.trim()) {
            addTaskToList(taskInput.value, taskDescInput.value);
            saveTasks();
            taskInput.value = '';
            taskDescInput.value = '';
        }
    });

    tasksContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const taskToRemove = event.target.parentElement;
            tasksContainer.removeChild(taskToRemove);
            saveTasks();
        } else if (event.target.classList.contains('edit-btn')) {
            const taskElement = event.target.parentElement;
            const nameElement = taskElement.querySelector('.task-name');
            const descElement = taskElement.querySelector('.task-desc');
            const newName = prompt('Edit task name:', nameElement.textContent);
            const newDesc = prompt('Edit task description:', descElement.textContent);
            if (newName !== null) nameElement.textContent = newName;
            if (newDesc !== null) descElement.textContent = newDesc;
            saveTasks();
        }
    });

    const filter = document.getElementById('filter');
    filter.addEventListener('keyup', function (event) {
        const textEntered = event.target.value.toLowerCase();
        const taskItems = document.querySelectorAll('.task');
        taskItems.forEach(item => {
            const taskName = item.querySelector('.task-name').textContent.toLowerCase();
            const taskDesc = item.querySelector('.task-desc').textContent.toLowerCase();
            if (taskName.includes(textEntered) || taskDesc.includes(textEntered)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    loadTasks();  // Load tasks on page load
});
