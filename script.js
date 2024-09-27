// Book data (you might want to load this from an external source in a real application)
const books = [
    { id: 1, title: "Book 1", author: "Author 1", price: 9.99 },
    { id: 2, title: "Book 2", author: "Author 2", price: 14.99 },
    // Add more books as needed
];

// Cart data
let cart = [];

// Function to display the book catalog
function displayCatalog() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>By ${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(bookElement);
    });
}

// Function to add a book to the cart
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        cart.push(book);
        updateCart();
    }
}

// Function to update the cart display
function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Your cart is empty</p>';
    } else {
        let total = 0;
        cart.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `
                <p>${book.title} - $${book.price.toFixed(2)}</p>
            `;
            cartElement.appendChild(bookElement);
            total += book.price;
        });
        const totalElement = document.createElement('p');
        totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
        cartElement.appendChild(totalElement);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayCatalog();
    updateCart();
});