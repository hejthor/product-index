import { fetchProducts } from './fetchProducts.js'; // Import fetchProducts function

export async function loadProducts() {
    const products = await fetchProducts('rema'); // Fetch products using your function

    const productsColumn = document.getElementById('products-column');
    productsColumn.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item border p-4 m-2 rounded shadow';
        productElement.innerHTML = `
            <h2 class="text-lg font-semibold">${product.name}</h2>
            <p>${product.description}</p>
            <p class="font-bold">${product.price}</p>
        `;
        productsColumn.appendChild(productElement); // Add the product to the products column
    });
}