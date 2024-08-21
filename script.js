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

        let readButtonText;
        myLibrary[i].isRead == "Yes" ? readButtonText = "Unread" : readButtonText = "Read";

        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const isRead = document.createElement("div");
        title.innerHTML = `<span>Title:</span> ${myLibrary[i].title}`;
        author.innerHTML = `<span>Author:</span> ${myLibrary[i].author}`;
        pages.innerHTML = `<span>Pages:</span> ${myLibrary[i].pages}`;
        isRead.innerHTML = `<span>Read?:</span> ${myLibrary[i].isRead}`;

        const toggleRead = document.createElement("button");
        toggleRead.textContent = readButtonText;
        const removeBook = document.createElement("button");
        removeBook.textContent = "Remove";

        toggleRead.addEventListener("click", () => {
            if (myLibrary[i].isRead == "Yes"){
                myLibrary[i].isRead = "No";
            } else {
                myLibrary[i].isRead = "Yes";
            }
            displayLibrary();
        })

        removeBook.addEventListener("click", () => {
            myLibrary.pop(i);
            displayLibrary();
        })

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(isRead);
        book.appendChild(toggleRead);
        book.appendChild(removeBook);
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
    if (e.target == modal){
        modal.style.display = "none";
    }
})