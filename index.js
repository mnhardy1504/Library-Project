const myLibrary = [];

function Book(title, author, pages, read) {  // object constructor that holds book info
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
 
  displayForm();
}



function displayBooks() {  //displays library of books
  const container = document.getElementById('bookContainer');
  container.innerHTML = '';  

  myLibrary.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book'); // exists for styling purposes

    bookElement.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
    `; 

  container.appendChild(bookElement);
  });
}

//function to display the form for adding a enw book
function displayForm() {
  const form = document.createElement('form');

  const titleInput = createFormInput('Title', 'text');
  const authorInput = createFormInput('Author', 'text');
  const pagesInput = createFormInput('Pages', 'number');
  const readInput = createFormInput('Read', 'checkbox');

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Add Book';

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      parseInt(pagesInput.value),
      readInput.checked
    );
    myLibrary.push(newBook);
    displayBooks(); // Refresh the displayed books
  });

  form.appendChild(titleInput);
  form.appendChild(authorInput);
  form.appendChild(pagesInput);
  form.appendChild(readInput);
  form.appendChild(submitButton);

  document.body.appendChild(form);
}

function createFormInput(labelText, type) {
  const label = document.createElement('label');
  label.textContent = `${labelText}: `;
  const input = document.createElement('input');
  input.type = type;
  label.appendChild(input);
  return label;
}

displayBooks();