import Books from './modules/books.js';
import { addNew, list, contact } from './modules/SPA.js';

const addNewTag = document.querySelector('a.menu-item.add-new');
addNewTag.addEventListener('click', () => addNew());

const listTag = document.querySelector('a.menu-item.first.list');
listTag.addEventListener('click', () => list());

const contactTag = document.querySelector('a.menu-item.contact');
contactTag.addEventListener('click', () => contact());

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#tittle-name').value;
  const author = `by ${document.querySelector('#author-name').value}`;
  const book = new Books(title, author);
  book.addBook();
  book.insertBookHtml();

  document.querySelector('#tittle-name').value = '';
  document.querySelector('#author-name').value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  let jsonBooks = JSON.parse(localStorage.getItem('booksStorage'));
  if (jsonBooks) {
    jsonBooks = JSON.parse(localStorage.getItem('booksStorage'));
    const bookLibrary = jsonBooks.map((book) => new Books(book.title, book.author));
    bookLibrary.forEach((n) => {
      n.insertBookHtml();
    });
    }
});
