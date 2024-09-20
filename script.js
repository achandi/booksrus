 // Sample book data
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 9.99 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99 },
    { title: "1984", author: "George Orwell", price: 10.99 }
];

// Function to display books on the catalog page
function displayBooks() {
    const bookList = document.getElementById("book-list");
    if (bookList) {
        books.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: $${book.price.toFixed(2)}</p>
            `;
            bookList.appendChild(bookElement);
        });
    }
}

// Call displayBooks when the page loads
window.addEventListener("load", displayBooks);