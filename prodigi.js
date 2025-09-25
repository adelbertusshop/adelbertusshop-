// prodigi.js
const apiKey = 'TWÓJ_KLUCZ_PRODIGI';

export async function fetchProdigiProducts() {
    try {
        const res = await fetch('https://api.prodigi.com/v4/catalog/products', {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('Błąd pobierania produktów:', err);
        return [];
    }
}

export async function renderProdigiProducts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = await fetchProdigiProducts();

    container.innerHTML = ''; // czyścimy zawartość
    products.forEach(product => {
        const el = document.createElement('div');
        el.className = 'prodigi-item';
        el.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.images[0]?.url || ''}" alt="${product.name}" />
            <p>Cena: ${product.retailPrice?.price} ${product.retailPrice?.currency}</p>
        `;
        container.appendChild(el);
    });
}
