// ========== LESSON 1: Shopping List ==========
function addShoppingItem() {
    // Write your code here
    console.log("test")
    //step 1, ambil data dari input
    const shoppingInput = document.getElementById('shoppingInput');
    console.log(shoppingInput);
    console.log(shoppingInput.value);
    const itemText = shoppingInput.value;

    //step 2

    if (itemText == "") {
        alert("input tidak boleh kosong");
        return;
    }

    //step 3

    const itemDiv = document.createElement("div");
    itemDiv.className = 'list-item';
    itemDiv.innerHTML = `
                ${itemText}
                <button class="btn btn-danger" onclick="this.parentElement.remove()">x</button>
           
            `;

    //step 4

    const shoppingList = document.getElementById("shoppingList")
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

    //step 1
    const noteInput = document.getElementById('noteInput')
    const inputText = noteInput.value
    const date = new Date().toLocaleTimeString()
    //step 2
    if (inputText == "") {
        alert("input tidak boleh kosong");
        return;
    }

    //step 3
    const itemDiv = document.createElement("div");
    itemDiv.className = 'list-item';
    itemDiv.innerHTML = `
                <div>
                <p>${inputText}</p>
                <p>${date}</p>
                </div>
                <button class="btn btn-danger" onclick="this.parentElement.remove()">x</button>
           
            `;

    //step 4
    const notesList = document.getElementById("notesList")
    notesList.appendChild(itemDiv);

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

// step 1: getting input from users
function checkDiscount() {
    // Write your code here
    const ageInput = document.getElementById('ageInput');
    const age = parseInt(ageInput.value);



    //step 2: validating users age (whether number or not)

    if (isNaN(age) || age < 0) {
        alert('age not valid')
        return
    }

    //step 3: 
    if (age >= 13 && age <= 17) {
        showResult('congratulations! you received a student discount.', 'success')
    } else if (age >= 65) {
        showResult('congratulations! you received a senior discount.', 'success')
    } else {
        showResult('you are at a normal price', 'success')
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
    //step 1: get input from user

    const scoreInput = document.getElementById('scoreInput')
    const score = parseInt(scoreInput.value)

    //step 2: validate grade (0-100)

    if (score < 0 || score > 100) {
        alert('enter valid grade')
        return;
    }

    //step 3: grade range

    if (score >= 90 && score <= 100) {
        showGradeResult('your grade is A', 'success')
    } else if (score >= 80 && score <= 89) {
        showGradeResult('your grade is B', 'success')
    } else if (score >= 70 && score <= 79) {
        showGradeResult('your grade is C', 'success')
    } else if (score >= 60 && score <= 69) {
        showGradeResult('your grade is D', 'warning')
    } else {
        showGradeResult('you fail', 'error')
    }

    scoreInput.value = "";
    scoreInput.focus();


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

    const productList = document.querySelector("#productsList")
    productList.innerHTML = ''

    products.forEach(function (p) {
        const productCard = document.createElement('div')
        productCard.innerHTML = `
        <h2> ${p.name}</h2>
        <p> ${p.price}</p>
        <button class="btn btn-primary" onclick="alert('${p.name} has been added to cart')">BUY</button>
        `;

        productList.append(productCard)
        productCard.className = 'card p-4'


    })




}

// ========== PRACTICE 3: Multiplication Table ==========
function generateTable() {
    // Write your code here
    const tableInput = document.querySelector('#tableInput')
    const number = tableInput.value

    // validate number
    if (number < 1 && number > 12) {
        alert('enter valid number');
        return;
    }

    const tableResult = document.querySelector('#tableResult')
    tableResult.innerHTML = ""

    for (let i = 1; i < 11; i++) {
        const numberCard = document.createElement('div')
        numberCard.innerHTML = `
            ${number} x ${i} = ${number * i}
        `;

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