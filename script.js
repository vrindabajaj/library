const library = document.querySelector(".library-container");
const modal = document.querySelector(".modal");
const add_book = document.querySelector(".add-book");
const form_submit = document.querySelector(".form-submit");
const span = document.querySelector(".close");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayLibrary();
}

function displayLibrary() {
    while (library.firstChild) { 
        library.removeChild(library.firstChild);
    }

    for(let i = 0; i < myLibrary.length; i++){
        const book = document.createElement("div");
        book.innerHTML =  
            `Title: ${myLibrary[i].title}<br>
            Author: ${myLibrary[i].author}<br>
            Pages: ${myLibrary[i].pages}<br>
            Read (Y/N): ${myLibrary[i].read}`;
        book.classList.add("book");
        library.appendChild(book);
    }
}

add_book.addEventListener("click", () => {
    modal.style.display = "block";
})

form_submit.addEventListener("click", () => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    //to-do: check checkbox values
    let read = document.querySelector("#read").value;
    addBookToLibrary(title, author, pages, read);
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