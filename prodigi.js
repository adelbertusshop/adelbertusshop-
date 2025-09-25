// prodigi.js
export async function fetchProdigiProducts() {
    try {
        const apiKey = process.env.PRODIGI_API_KEY; // Twój klucz z Vercel
        const response = await fetch('https://api.prodigi.com/products', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        const data = await response.json();
        return data; // zwraca listę produktów
    } catch (error) {
        console.error('Błąd pobierania produktów z Prodigi:', error);
        return [];
    }
}

// Funkcja do wstawiania produktów do kontenera w HTML
export async function initProdigi(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = await fetchProdigiProducts();
    if (products.length === 0) {
        container.innerHTML = '<p>Nie udało się pobrać produktów.</p>';
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="prodigi-product">
            <img src="${product.imageUrl}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.price.amount} ${product.price.currency}</p>
        </div>
    `).join('');
}
