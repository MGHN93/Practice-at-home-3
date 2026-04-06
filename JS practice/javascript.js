function addShoppingItem() {
    // Write your code here

    //step 1: we take data from #shoppingInput, then store in a variable. We also need to check if the user inputs something. cannot be empty

    const shoppingInput = document.getElementById('shoppingInput')
    const item = shoppingInput.value



    //step 2 check if input is not empty

    if (item == "") {
        alert('please enter a valid item');
        return;
    }



    //step 3 create another variable which creates a new div, then inserts value from variable in step 1 using .innerhtml, also create a delete button in this div

    const itemDiv = document.createElement('div')
    itemDiv.className = 'list-item'
    itemDiv.innerHTML = `
    <p>${item}</P>
    <button type = "button" class="btn btn-danger" onclick=this.parentElement.remove()>x</button>`;


    //step 4 add HTML content with delete button - use existing id shoppingList and create a new constant. enter variable from step 3 into shoppingLIst constant using .appendchild

    const shoppingList = document.querySelector('#shoppingList')
    shoppingList.appendChild(itemDiv);



    //step 5
    shoppingInput.value = "";
    shoppingInput.focus();

}




// Allow Enter key to add item
document.getElementById('shoppingInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addShoppingItem();
    }
});


// ========== PRACTICE 1: Note-Taking App ==========
function addNote() {
    // Write your code here

    //step 1: we take data from #noteInput, then store in a variable. also create a variable which stores a date, can use new Date().toLocaleTimeString()

    const noteInput = document.querySelector("#noteInput")
    const note = noteInput.value
    const date = new Date().toLocaleTimeString()

    //step 2 check if input is not empty

    if (note == "") {
        alert('Field is empty!');
        return;
    }


    //step 3 create another variable which creates a new div, then inserts value from variable and date in step 1 using .innerhtml, also create a delete button in this div

    const noteDiv = document.createElement('div')
    noteDiv.className = 'list-item'
    noteDiv.innerHTML = `
    <p>${note}</p>
    <p>${date}</p>
    <button type='button' class='btn btn-danger' onclick=this.parentElement.remove()>remove</button>`



    //step 4 add HTML content with delete button - use existing id notesList and create a new constant. enter variable from step 3 into notesList constant using .appendchild

    const notesList = document.getElementById('notesList')
    notesList.appendChild(noteDiv)


    //step 5
    noteInput.value = "";
    noteInput.focus();

}






document.getElementById('noteInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        addNote();
    }
});

// ========== LESSON 2: Age Verification ==========
function checkDiscount() {
    // Write your code here
    //step 1. create a variable const which gets from id ageInput. change that variable to interger using parseInt(), store in another variable

    const ageInput = document.getElementById('ageInput')
    const age = parseInt(ageInput.value)

    //step 2. validate if variable from step 1 is a number using isNan and if not a negative number (use < 0)
    if (isNaN(age) || (age < 0)) {
        alert('please enter a valid number');
        return;
    }

    //step 3. create the if else condition, call showResult function and type in the message
    if ((age >= 13) && (age <= 17)) {
        showResult('you received a student discount', 'success')
    } else if (age >= 65) {
        showResult('you received a senior citizen discount', 'success')
    } else if (age < 13) {
        showResult('you get no discount', 'error')
    } else {
        showResult('go home', 'error')
    }



}

function showResult(message, type) {
    const resultDiv = document.getElementById('discountResult');
    resultDiv.innerHTML = `<div class="result-message ${type}">${message}</div>`;
}

document.getElementById('ageInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkDiscount();
    }
});

// ========== PRACTICE 2: Grade Calculator ==========
function calculateGrade() {
    // Write your code here
    //step 1: we take data from #scoreInput, then store in a variable. 

    const scoreInput = document.getElementById("scoreInput")
    const score = scoreInput.value
    const scoreInt = parseInt(score)

    //step 2. validate if variable from step 1 is a number using isNan and if not a negative number (use < 0)

    if (isNaN(scoreInt) || (scoreInt < 0)) {
        alert("Please enter a valid number");
        return;
    }

    //step 3. create the if else condition, call showGradeResult function and type in the message
    if (scoreInt >= 90) {
        showGradeResult('your score is A', 'success')
    } else if (scoreInt >= 80) {
        showGradeResult('your score is B', 'success')
    } else if (scoreInt >= 70) {
        showGradeResult('your score is C', 'success')
    } else if (scoreInt >= 60) {
        showGradeResult('your score is D', 'error')
    } else {
        showGradeResult('your score is F', 'error')
    }
}

function showGradeResult(message, type) {
    const resultDiv = document.getElementById('gradeResult');
    resultDiv.innerHTML = `<div class="result-message ${type}">${message}</div>`;
}

document.getElementById('scoreInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calculateGrade();
    }
});

// ========== LESSON 3: Product Catalog ==========
const products = [
    { name: 'Laptop', price: '$999' },
    { name: 'Mouse', price: '$25' },
    { name: 'Keyboard', price: '$75' },
    { name: 'Monitor', price: '$299' },
    { name: 'Headphones', price: '$120' }
];

function displayProducts() {
    // Write your code here
    //step 1: create a const variable to store productsList. 
    const productList = document.getElementById("productsList")
    //step 2: use ____.innerHTML = "" to clear any previous product inside productList
    productList.innerHTML = ""
    //step 3: loop through variable 'products' with forEach, ______.forEach(function(_)){}, whithin for each loop, create a variable const which creates a new card
    products.forEach(function (p) {
        const productCard = document.createElement('div')
        productCard.innerHTML = `
        <p>${p.name}</p>
        <p>${p.price}</p>
        <button type="button" class="btn btn-primary" onclick="alert('${p.name} has been added to the cart!')" >Buy</button>`

        productList.append(productCard)
        productCard.className = 'card p-4'
    }
    )



}

// ========== PRACTICE 3: Multiplication Table ==========
function generateTable() {
    // Write your code here
    //step 1: store id tableInput within a variable, since input type use store table input using .value in a variable. validate the input whether <1 or >12
    const tableInput = document.querySelector('#tableInput');
    const input = tableInput.value;
    if ((input < 1) || (input > 12)) {
        alert('enter a valid number!');
        return;
    }

    //step 2: store tableResult in a variable, then use .innerHTML='' on it since div type
    const tableResult = document.querySelector('#tableResult');
    tableResult.innerHTML = '';

    //step 3: use a for loop (for (let i = 1; i < 11; i = i + 1)). within loop, create a new card using createElement = ('div'). enter calculation using .innerHTML.
    for (let i = 1; i < 11; i = i + 1) {
        const tableCard = document.createElement('div')
        tableCard.innerHTML = `
        ${input} x ${i} = ${input * i}`

        tableResult.append(tableCard)
        tableCard.className = 'card p-4';

    }

}





document.getElementById('tableInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        generateTable();
    }
});

// ========== BONUS: Todo App ==========
let todos = [];

function addTodo() {
    // Write your code here
    // step 1: store input (id todoInput) in a variable first, store again the variable as __.value, then insert value into todos array using .push()

    const todoInput = document.getElementById('todoInput')
    const input = todoInput.value;
    const prioritySelect = document.getElementById('prioritySelect');
    const priority = prioritySelect.value;

    //Step 1.1: creating an alert which ensures input to not be blank
    if(input==""){
        alert('please enter a valid input');
        return;
    }
    //Step 1.2: Creating another variable the type of object that needs to be pushed to todos array
    const todo = {
        text: input,
        completed: false,
        priority: priority
    };
    todos.push(todo)
    todoInput.value = "";
    console.log(todos)

    renderTodos();
    updateStats();

}

function toggleTodo(index) {
    // Write your code here 
    todos[index].completed = !todos[index].completed;

    renderTodos();
    updateStats();

}

function deleteTodo(index) {
    // Write your code here
    todos.splice(index,1);
    
    renderTodos();
    updateStats();
}

function renderTodos() {
    // Write your code here
    const list = document.querySelector("#todosList");

    list.innerHTML = '';

    todos.forEach(function(todo,index){
        const container = document.createElement('div');
        container.classList.add('todo-card');
        container.classList.add(todo.priority);


        // const priorityText = document.createElement('span');
        // priorityText.textContent = `(${todo.priority})`;

        // if(todo.priority=='high'){
        //     priorityText.style.color = 'red'
        // } else if(todo.priority=='medium'){
        //     priorityText.style.color = 'orange'
        // } else{
        //     priorityText.style.color = 'green'
        // }


        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.checked = todo.completed;

        checkbox.addEventListener('change',function(){
            toggleTodo(index)
            console.log(todos)

        });

        


        const text = document.createElement('span');
        text.textContent = todo.text;
        text.style.margin = '0 10px';

        if (todo.completed){
            text.style.textDecoration='line-through';
        }

        const erase = document.createElement('button')
        erase.textContent = 'Delete';

        erase.addEventListener('click',function(){
            deleteTodo(index);
            console.log(todos)

        });

        container.appendChild(checkbox);
        container.appendChild(text);
        container.appendChild(erase);
        // container.appendChild(priorityText);

        list.appendChild(container)
    })
}

function updateStats() {
    // Write your code here

    const total = todos.length

    const completed = todos.filter(function(todo) {todo.completed}).length;

    document.getElementById('todoStats').textContent = `Total:${total}|Completed:${completed}`;
}

document.getElementById('todoInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});