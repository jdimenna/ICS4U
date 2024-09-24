let library = [
    { title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, isAvailable: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isAvailable: true }
  ];

function displayList(){
    console.log('1. Add New Book') 
    console.log('2. List Available Books')
    console.log('3. Borrow a Book')
    console.log('4. Return a Book')
    console.log('5. List Books by Author')
    console.log('6. Find Books By Year')
    console.log('7. Remove a Book')
    console.log('8. Exit')
    action = parseFloat(prompt('What would you like to do?'));
}

while (action <= 0 || action >= 8 || isNaN(action)){
    if (isNaN(action)) {
        console.log("");
        console.log('Please enter a number.')
    } else if (action <= 0 || action >= 8){
        console.log("");
        console.log('Please select an option from below.')
    }
    displayList();
    if (action == 1) {
        addNewBook();
        action = -1;
    } else if (action == 2) {
        listBooks_Available();
        action = -1;
    } else if (action == 3) {
        borrowBook();
        action = -1;
    } else if (action == 4) {
        returnBook();
        action = -1;
    } else if (action == 5) {
        listBooks_Author();
        action = -1;
    } else if (action == 6) {
        listBooks_Year();
        action = -1;
    } else if (action == 7) {
        removeBook();
        action = -1;
    } else if (action == 8) {
        console.log("Exiting program.")
    }
    
}

function addNewBook(title, author, year){
    

}

function listBooks_Available(){

}

function borrowBook(title){

}

function returnBook(title){

}

function listBooks_Author(author){

}

function listBooks_Year(year){

}

function removeBook(title){
    
}