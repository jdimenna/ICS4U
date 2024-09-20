const prompt = require('prompt-sync')();
let expenses = [];
let action = 0;
let budget = parseFloat(prompt("What is your budget?"));

while (action <= 0 || action >= 6 || isNaN(action)){
    if (isNaN(action)) {
        console.log("");
        console.log('Please enter a number.')
    } else if (action <= 0 || action >= 6){
        console.log("");
        console.log('Please select an option from below.')
    }
    displayList();
    if (action == 1) {
        let amount = parseFloat(prompt('How much would you like to add?'));
        let category = prompt('What category is the expense?');
        addExpense(amount, category);
        console.log(expenses);
        console.log('Expense Added.');
        action = -1;
    } else if (action == 2) {
        calculateTotal();
        action = -1;
    } else if (action == 3) {
        checkBudget();
        action = -1;
    } else if (action == 4) {
        let category = prompt('What category would you like to remove from?');
        removeExpense(category);
        action = -1;
    } else if (action == 5) {
        console.log("Exiting program.")
    }
    
}



function displayList(){
    console.log('1. Add Expense')
    console.log('2. View Total Expenses')
    console.log('3. Check Budget')
    console.log('4. Remove an Expense')
    console.log('5. Exit')
    action = parseFloat(prompt('What would you like to do?'));
}

function addExpense(amount, category) {
    let amt = amount;
    let cat = category;
    expenses.push([amt, cat]);
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < expenses.length; i++){
        total += parseInt(expenses[i][0]);
    }
    console.log("Total is: " + total);
}

function checkBudget() {
    let total = 0;
    for (let i = 0; i < expenses.length; i++){
        total += parseInt(expenses[i][0]);
    }
    if (total > budget) {
        console.log("Total expenses exceed budget by $" + (total-budget));
    } else if (total == budget) {
        console.log("Total expenses equal the budget.")
    } else {
        console.log("Total expenses are under budget.")
    }
}

function removeExpense(category) {
    cat = category;
    let found = 0;
    while (found == 0) {
        for (let i = 0; i < expenses.length; i++){
            if ((expenses[i][1])==cat) {
                expenses.splice(i,1);
                found = 1;
                console.log(expenses)
                console.log(category + " expense removed.")
            } 
        }
        if (found == 0){
            console.log("No expenses of this category found.")
            found = 1;
        }
    }
}
