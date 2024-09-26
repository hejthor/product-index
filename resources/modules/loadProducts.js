import { fetchProducts } from './fetchProducts.js';     // Import fetchProducts function

export async function loadProducts() {
    let products = [
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '10',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '20',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '30',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '20',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '30',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '20',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '30',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '20',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '30',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '20',
            }
        },
        {
            source: 'rema',
            product: {
                title: 'test',
                price: '30',
            }
        }
    ];

    products.push(await fetchProducts('rema'));         // Fetch products using your function

    const productsColumn = document.getElementById('products');
    productsColumn.innerHTML = '';                      // Clear previous content

    products.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2 class="text-lg font-semibold">${element.product.title}</h2>
            <p>${element.product.price}</p>
        `;
        productsColumn.appendChild(div);                // Add the product to the products column
    });
}