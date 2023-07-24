let library = [];

const addABookCard = document.getElementById("add_a_book_card");
const addABookForm = document.querySelector(".add_book_section");
const addABookButton = document.querySelector(".add_book_button");
const titleInput = document.querySelector(".book_title_input");
const authorInput = document.querySelector(".book_author_input");
const pageNumberInput = document.querySelector(".number_of_pages_input");
const readInput = document.querySelector(".have_you_read_it_checkbox");
const body = document.querySelector("body");
const bookStorage = document.querySelector(".book_storage");
/* const addBookFormContent = document.querySelectorAll("#add_book_form > *"); */

function toggleAddBookForm (event) {
    if (addABookForm.classList.contains("hidden")) {
        if (event.target.id === "add_a_book_card" || event.target.parentElement.id === "add_a_book_card") {
            addABookForm.classList.toggle("hidden");
        }
    } else {
        if (!addABookForm.contains(event.target)) {
            addABookForm.classList.toggle("hidden");
        }
    }
}

function Book (title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    pageNumberInput.value = 0;
    readInput.checked = false;
}

// Da qui !!!!!
function createBookCard (title, author, numberOfPages, read) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("card");
    let bookTitle = document.createElement("p");
    bookTitle.textContent = `Title: ${title}`;
    bookCard.appendChild(bookTitle);
    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${author}`;
    bookCard.appendChild(bookAuthor);
    let pagesRead = document.createElement("p");
    pagesRead.textContent = `Pages: ${numberOfPages}`;
    bookCard.appendChild(pagesRead);
    let readStatus = document.createElement("p");
    readStatus.textContent = `Read: ${read ? "Yes" : "No"}`;
    bookCard.appendChild(readStatus);
    bookStorage.insertBefore(bookCard, addABookCard);
    addABookForm.classList.toggle("hidden");
}
// Fin qua !!!

function addABook(event) {
    event.preventDefault();
    event.stopPropagation();
    // We check if the title and the author inputs have been filled in.
    // The page number is not required, so we don't check for it.
    if (titleInput.value && authorInput.value) {
        let book = new Book(titleInput.value, authorInput.value.charAt(0).toUpperCase() + authorInput.value.slice(1) , pageNumberInput.value, readInput.checked);
        library.push(book);
        createBookCard(titleInput.value, authorInput.value, pageNumberInput.value, readInput.checked);
        console.log(`Added a new book.\nTitle: ${book.title}\nAuthor: ${book.author}\nNumber of pages: ${book.numberOfPages}\nRead: ${book.read}.` );
        clearForm();
    };
}

addABookButton.addEventListener("click", addABook);
body.addEventListener("click", toggleAddBookForm);