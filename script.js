const library = document.querySelector(".library-container");
const modal = document.querySelector(".modal");
const add_book = document.querySelector(".add-book");
const form_submit = document.querySelector(".form-submit");
const span = document.querySelector(".close");

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

form_submit.addEventListener("click", () => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let isRead = document.querySelector("#isRead").checked ? "Yes" : "No";
    addBookToLibrary(title, author, pages, isRead);
    modal.style.display = "none";
})

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.unshift(new Book(title, author, pages, isRead));
    displayLibrary();
}

function displayLibrary() {
    //Avoids duplication
    while (library.firstChild) { 
        library.removeChild(library.firstChild);
    }

    for(let i = 0; i < myLibrary.length; i++){
        const book = document.createElement("div");
        book.innerHTML =  
            `<span>Title:</span> ${myLibrary[i].title}
            <span>Author:</span> ${myLibrary[i].author}
            <span>Pages:</span> ${myLibrary[i].pages}
            <span>Read yet?:</span> ${myLibrary[i].isRead}`;
        book.classList.add("book");
        library.appendChild(book);
    }
}

add_book.addEventListener("click", () => {
    modal.style.display = "block";
})

span.addEventListener("click", () => {
    modal.style.display = "none";
})
window.addEventListener("click", (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
})