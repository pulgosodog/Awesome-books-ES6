const bookSection = document.querySelector('#book-list');

export class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    addBook() {
        let array = JSON.parse(localStorage.getItem('booksStorage'));
        array.push(this);
        JSON.stringify(array);
        localStorage.setItem('booksStorage', JSON.stringify(array));
        console.log('adding book')
        console.log('book array', array)
        console.log('json file', JSON.parse(localStorage.getItem('booksStorage')));
    }

    removeBook() {
        let array = JSON.parse(localStorage.getItem('booksStorage'));
        array = array.filter((books) => books.title !== `${this.title}` && books.author !== `${this.author}`);
        JSON.stringify(array);
        localStorage.setItem('booksStorage', JSON.stringify(array));
        console.log('Removing book')
        console.log('book array', array)
        console.log('json file', JSON.parse(localStorage.getItem('booksStorage')));
    }

    insertBookHtml() {
        const div = document.createElement('div');
        const ul = document.createElement('ul');
        const tittelName = document.createElement('li');
        const authorName = document.createElement('li');
        const button = document.createElement('button');

        tittelName.textContent = `"${this.title}"`;
        authorName.textContent = this.author;
        button.textContent = 'Remove';

        button.addEventListener('click', () => {
            div.remove();
            this.removeBook();
        });

        ul.appendChild(tittelName);
        ul.appendChild(authorName);
        div.appendChild(ul);
        div.appendChild(button);
        div.classList.add('book');
        bookSection.appendChild(div);
    }
}