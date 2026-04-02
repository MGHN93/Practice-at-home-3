function addShoppingItem() {
    // Write your code here

    //step 1: we take data from #shoppingInput, then store in a variable. We also need to check if the user inputs something. cannot be empty

    const shoppingInput = document.getElementById('shoppingInput')
    const item = shoppingInput.value

    
    
    //step 2 check if input is not empty

    if(item ==""){
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

    if(note == ""){
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
    const age = parseInt(ageInput)
    
    //step 2. validate if variable from step 1 is a number using isNan and if not a negative number (use < 0)
    if(isNaN(age) || (age < 0)){
        alert('please enter a valid number');
        return;
    }

    //step 3. create the if else condition, call showResult function and type in the message
    if((age>=13)&&(age<=17)){
        showResult('you received a student discount','success')
    }else if(age>=65){
        showResult('you received a senior citizen discount','success')
    }else if(age<13){
        
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
    //step 1: get productsList
    const productList = document.querySelector('#productsList')
    //step 2: clear any previous product inside productList
    productList.innerHTML = ''
    //step 3: loop through products with forEach
    products.forEach(function (p){
        const card = document.createElement('div')
        card.innerHTML = `
        <h2>${p.name}</h2>
        <p>${p.price}</P>
        <button onclick = 'alert("${p.name} has been added to your cart")'>Buy</button>`

    productList.append(card)
    card.className = 'card p-4'
    })
}

// ========== PRACTICE 3: Multiplication Table ==========
function generateTable() {
    // Write your code here
    //step 1: get input from user

    const tableInput = document.querySelector('#tableInput')
    const number = tableInput.value
    // step: validate number
    if (number < 1 || number > 12) {
        alert('Please enter a valid number');
        return;
    }

    const tableResult = document.querySelector('#tableResult')
    tableResult.innerHTML = ''

    for (let i = 1; i < 11; i = i + 1) {
        const numberCard = document.createElement('div')
        numberCard.innerHTML = `${number} x ${i} = ${number * i}`
        tableResult.append(numberCard)
        numberCard.className = 'card p-4';
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
}

function toggleTodo(id) {
    // Write your code here
}

function deleteTodo(id) {
    // Write your code here
}

function renderTodos() {
    // Write your code here
}

function updateStats() {
    // Write your code here
}

document.getElementById('todoInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});