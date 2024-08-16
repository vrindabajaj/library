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