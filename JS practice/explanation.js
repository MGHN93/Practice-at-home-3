// Create an empty array to store all todo items
let todos = [];

function addTodo() {

    // Get the input field element
    const todoInput = document.getElementById('todoInput');

    // Get the text value from the input
    const input = todoInput.value;

    // Get the priority dropdown element
    const prioritySelect = document.getElementById('prioritySelect');

    // Get the selected priority value (low / medium / high)
    const priority = prioritySelect.value;

    // If input is empty, show alert and stop function
    if(input == ""){
        alert('please enter a valid input');
        return;
    }

    // Create a todo object (one task)
    const todo = {
        text: input,          // task text
        completed: false,     // default: not completed
        priority: priority    // selected priority
    };

    // Add the new todo object into the array
    todos.push(todo);

    // Clear the input box after adding
    todoInput.value = "";

    // Print todos in console (for debugging)
    console.log(todos);

    // Re-render the todo list on screen
    renderTodos();

    // Update stats (total & completed)
    updateStats();
}

function toggleTodo(index) {

    // Flip completed status (true ↔ false)
    todos[index].completed = !todos[index].completed;

    // Re-render UI
    renderTodos();

    // Update stats
    updateStats();
}

function deleteTodo(index) {

    // Remove 1 item from array at given index
    todos.splice(index, 1);

    // Re-render UI
    renderTodos();

    // Update stats
    updateStats();
}

function renderTodos() {

    // Get the container where todos will be displayed
    const list = document.querySelector("#todosList");

    // Clear existing content before re-rendering
    list.innerHTML = '';

    // Loop through each todo item
    todos.forEach(function(todo, index){

        // Create a container div for each todo
        const container = document.createElement('div');
        container.classList.add('todo-card');
        container.classList.add(todo.priority);


        // // Create a span for priority text
        // const priorityText = document.createElement('span');

        // // Set text like (high), (medium), etc.
        // priorityText.textContent = `(${todo.priority})`;

        // // Change color based on priority
        // if(todo.priority == 'high'){
        //     priorityText.style.color = 'red';
        // } else if(todo.priority == 'medium'){
        //     priorityText.style.color = 'orange';
        // } else {
        //     priorityText.style.color = 'green';
        // }

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Set checkbox state based on completed status
        checkbox.checked = todo.completed;

        // When checkbox changes → toggle todo
        checkbox.addEventListener('change', function(){
            toggleTodo(index);
            console.log(todos)
        });

        // Create span for todo text
        const text = document.createElement('span');
        text.textContent = todo.text;

        // If completed → add line-through style
        if (todo.completed){
            text.style.textDecoration = 'line-through';
        }

        // Create delete button
        const erase = document.createElement('button');
        erase.textContent = 'Delete';

        // When delete button clicked → remove todo
        erase.addEventListener('click', function(){
            deleteTodo(index);
            console.log(todos)
        });

        // Add all elements into container
        container.appendChild(checkbox);
        container.appendChild(text);
        // container.appendChild(erase);
        // container.appendChild(priorityText);

        // Add container to the list in HTML
        list.appendChild(container);
    });
}

function updateStats() {

    // Get total number of todos
    const total = todos.length;

    // Count how many are completed
    const completed = todos.filter(todo => todo.completed).length;

    // Display stats in HTML
    document.getElementById('todoStats').textContent =
        `Total:${total} | Completed:${completed}`;
}

// Listen for Enter key in input field
document.getElementById('todoInput')?.addEventListener('keypress', function (e) {

    // If Enter is pressed → add todo
    if (e.key === 'Enter') {
        addTodo();
    }
});