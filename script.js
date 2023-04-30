const contentDiv = document.querySelector(".content");
const addBookBtn = document.querySelector(".add-book");
const newBookForm = document.querySelector(".new-book-form");

const newTitleInput = document.querySelector(".new-title");
const newAuthorInput = document.querySelector(".new-author");
const newPagesInput = document.querySelector(".new-pages");
const bookRead = document.querySelector(".read-true");

let myLibrary = [
  {
    title: "Test1",
    author: "Author1",
    pages: 100,
    read: true,
    id: 3529089032,
  },
  {
    title: "Test2",
    author: "Author2",
    pages: 200,
    read: true,
    id: 32856235,
  },
  {
    title: "Test3",
    author: "Author3",
    pages: 300,
    read: false,
    id: 5239820,
  },
];

let bookId = 0;

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function displayBook(book) {
  const bookDiv = document.createElement("div");
  const titleText = document.createElement("h3");
  const authorText = document.createElement("p");
  const pagesText = document.createElement("p");
  const readText = document.createElement("p");
  const deleteBtn = document.createElement("button");

  bookDiv.classList.add("book-card");
  titleText.textContent = book.title;
  authorText.textContent = book.author;
  pagesText.textContent = book.pages;
  readText.textContent = book.read ? "Read" : "Not Read";
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", book.id);

  bookDiv.append(titleText);
  bookDiv.append(authorText);
  bookDiv.append(pagesText);
  bookDiv.append(readText);
  bookDiv.append(deleteBtn);

  contentDiv.append(bookDiv);
}

function displayAllBooks(library) {
  library.forEach((book) => displayBook(book));
}

function clearDisplay() {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

function addBook() {
  const newTitle = newTitleInput.value;
  const newAuthor = newAuthorInput.value;
  const newPages = newPagesInput.value;
  const newRead = bookRead.checked;
  const newBook = new Book(newTitle, newAuthor, newPages, newRead, bookId);

  myLibrary.push(newBook);
  displayBook(newBook);
  bookId++;
}

function deleteBook(id) {
  myLibrary = myLibrary.filter((book) => {
    return book.id != id;
  });
  console.log(myLibrary);
}

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  newBookForm.reset();
});

contentDiv.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-id")) {
    deleteBook(e.target.dataset.id);
  }

  clearDisplay();
  displayAllBooks(myLibrary);
});

displayAllBooks(myLibrary);
