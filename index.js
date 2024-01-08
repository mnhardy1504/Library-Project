const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author's name:");
  const pages = prompt("Enter the number of pages:");
  const read = prompt("Has the book been read?:");    // did prompt rather than confirm to enter value
  const newBook = new Book(title, author, pages, read);  // new Book object

  myLibrary.push(newBook); // Add the new book to the library. 

  console.log("Update Library:", myLibrary);
}

addBookToLibrary()
