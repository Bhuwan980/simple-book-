// created a function where book is initialized
function Book(name, author, category) {
    this.name = name;
    this.author = author;
    this.category = category
}
function Display() {

}
//prototype makes the function add and clear a instance of function Display
Display.prototype.add = function (book) {
    console.log('adding')
    let bookDisplay = document.getElementById('bookDisplay');
    let uiString = `<tr>
                    
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.category}</td>
                </tr>`
    bookDisplay.innerHTML += uiString

}

Display.prototype.clear = function () {
    let addBookForm = document.getElementById('addbookform')
    addBookForm.reset();
}
// validating the input of the user
Display.prototype.validate= function (book){
    if (book.name.length<3){
        return false;

    }
    else{
        return true;
    }
}

// for showing the message
// Display.prototype.show = function(){
//     console.log('this si doom')
// }
// on submit event it creates the new book object
let addBookForm = document.getElementById('addbookform')
addBookForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let category;
    let fiction = document.getElementById('fiction');
    let nonfiction = document.getElementById('nonfictoin');

    if (fiction.checked) {
        category = fiction.value;
    }
    else if (nonfiction.checked) {
        category = nonfiction.value;
    }



    let book = new Book(name, author, category);
    console.log(book)


    let display = new Display()

    if (display.validate(book))
    {
        display.add(book);
        display.clear();
        // display.show('success')

    }
    else{
        
        console.log('hey man YOu shoule add the name and author')
        // display.show('errors')
    }

   

    console.log('hey this is cool')
})