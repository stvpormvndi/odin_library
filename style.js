let library = [];

const addABookCard = document.getElementById("add_a_book_card");
const addABookForm = document.querySelector(".add_book_section");
const addABookButton = document.querySelector(".add_book_button");
const titleInput = document.querySelector(".book_title_input");
const authorInput = document.querySelector(".book_author_input");
const pageNumberInput = document.querySelector(".number_of_pages_input");
const readInput = document.querySelector(".have_you_read_it_checkbox");


function toggleAddBookForm () {
    addABookForm.classList.toggle("hidden");
}

function Book (title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

// Da qui !!!!!
function createBookCard (title, author, numberOfPages, read) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("card");
}
// Fin qua !!!

function addABook(event) {
    event.preventDefault();
    let book = new Book(titleInput.value, authorInput.value.charAt(0).toUpperCase() + authorInput.value.slice(1) , pageNumberInput.value, readInput.checked);
    library.push(book);
    console.log(readInput.checked);
    titleInput.value = "";
    authorInput.value = "";
    pageNumberInput.value = 0;
    readInput.checked = false;
}

addABookCard.addEventListener("click", toggleAddBookForm);
addABookButton.addEventListener("click", addABook);