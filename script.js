const library = document.querySelector(".library-container");
const add_book = document.querySelector(".add-book");

add_book.addEventListener("click", () => {
    const book = document.createElement("div");
    book.classList.add("book");
    library.appendChild(book);
})