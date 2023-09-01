const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value;
  const checkButton = document.createElement('button');
  checkButton.textContent = 'Check';
  checkButton.classList.add('check-button');
  checkButton.addEventListener('click', () => {
    taskItem.classList.toggle('checked');
    if (taskItem.classList.contains('checked')) {
      checkButton.textContent = 'Uncheck';
    } else {
      checkButton.textContent = 'Check';
    }
  });

  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    const checkButton = document.createElement('button');
    checkButton.textContent = 'Check';
    checkButton.classList.add('check-button');
    checkButton.addEventListener('click', () => {
      taskItem.classList.toggle('checked');
    });

    taskItem.appendChild(deleteButton);
    taskItem.appendChild(checkButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
});
