const contentDiv = document.querySelector(".content");

const myLibrary = [
  {
    title: "Test1",
    author: "Author1",
    pages: 100,
    read: true,
  },
  {
    title: "Test2",
    author: "Author2",
    pages: 200,
    read: true,
  },
  {
    title: "Test3",
    author: "Author3",
    pages: 300,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBook(book) {
  const bookDiv = document.createElement("p");
  const titleText = document.createElement("h3");
  const authorText = document.createElement("p");
  const pagesText = document.createElement("p");
  const readText = document.createElement("p");

  bookDiv.classList.add("book-card");
  titleText.textContent = book.title;
  authorText.textContent = book.author;
  pagesText.textContent = book.pages;
  readText.textContent = book.read ? "Read" : "Not Read";

  bookDiv.append(titleText);
  bookDiv.append(authorText);
  bookDiv.append(pagesText);
  bookDiv.append(readText);

  contentDiv.append(bookDiv);
}

function displayAllBooks(library) {
  library.forEach((book) => displayBook(book));
}

displayAllBooks(myLibrary);
