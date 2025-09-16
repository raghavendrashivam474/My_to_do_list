document.addEventListener('DOMContentLoaded', function () {

    const taskInput = document.getElementById('task-input');

    const addBtn = document.getElementById('add-btn');

    const taskList = document.getElementById('task-list');



    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (e) {

        if (e.key === 'Enter') {

            addTask();

        }

    });



    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText === '') return;



        const li = document.createElement('li');

        const taskContent = document.createElement('div');

        taskContent.className = 'task-content';



        const taskSpan = document.createElement('span');

        taskSpan.className = 'task-text';

        taskSpan.textContent = taskText;



        const timestampSpan = document.createElement('span');

        timestampSpan.className = 'timestamp';

        timestampSpan.textContent = 'Created: ' + new Date().toLocaleString();



        taskContent.appendChild(taskSpan);

        taskContent.appendChild(timestampSpan);



        const buttonDiv = document.createElement('div');



        const completeBtn = document.createElement('button');

        completeBtn.className = 'complete-btn';

        completeBtn.textContent = 'Complete';



        const deleteBtn = document.createElement('button');

        deleteBtn.className = 'delete-btn';

        deleteBtn.textContent = 'Delete';



        buttonDiv.appendChild(completeBtn);

        buttonDiv.appendChild(deleteBtn);



        li.appendChild(taskContent);

        li.appendChild(buttonDiv);



        taskList.appendChild(li);

        taskInput.value = '';



        completeBtn.addEventListener('click', function () {

            taskSpan.classList.toggle('completed');

            completeBtn.textContent = taskSpan.classList.contains('completed') ? 'Undo' : 'Complete';

        });



        deleteBtn.addEventListener('click', function () {

            taskList.removeChild(li);

        });

    }

}); 