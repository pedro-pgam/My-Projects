function addTask() {
  const taskInput = document.getElementById('task');
  const taskList = document.getElementById('taskList');
  if(taskInput.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}