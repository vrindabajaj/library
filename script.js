const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayLibrary();
}

function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}

function getBook() {
    let title = prompt("title?");
    let author = prompt("author?");
    let pages = prompt("pages?");
    let read = prompt("read it? y/n");
    addBookToLibrary(title, author, pages, read);

}

const library = document.querySelector(".library-container");
const modal = document.querySelector(".modal");
const add_book = document.querySelector(".add-book");
const form_submit = document.querySelector(".form-submit");
const span = document.querySelector(".close");
// const book = document.createElement("div");
// book.classList.add("book");

add_book.addEventListener("click", () => {
    modal.style.display = "block";
})

form_submit.addEventListener("click", () => {
    //create new Book object using form inputs and add to array + display
    modal.style.display = "none";
})

span.addEventListener("click", () => {
    modal.style.display = "none";
})
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}