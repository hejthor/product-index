export async function fetchProducts(source) {                                                   // Define and export an async function named 'fetchProducts' that takes 'source' as a parameter
    let products = [];                                                                          // Initialize an empty array to store the results

    switch (source) {                                                                           // Switch statement to handle different sources
        case 'rema':
            try {
                const response = await fetch('https://shop.rema1000.dk/varer/304850');          // Fetch the HTML from the URL
                const html = await response.text();                                             // Get the response text
                const parser = new DOMParser();                                                 // Create a DOMParser instance
                const doc = parser.parseFromString(html, 'text/html');                          // Parse the HTML string into a document

                const title = doc.querySelector('.title')?.textContent.trim();                  // Extract title from the parsed document
                const priceNormal = doc.querySelector('.price-normal')?.textContent.trim();     // Extract price from the parsed document
                
                const product = {                                                               // Create the product object
                    title: title,
                    price: priceNormal,
                };

                products.push({ source: 'api', product: product });                             // Push the product object into the products array
            } catch (error) {
                console.error('Error fetching product data:', error);                           // Log any errors during the fetch
            }
            break;
        default:
            console.error('Invalid source');                                                    // Handle invalid sources
    }

    return products;                                                                            // Return the products array
}