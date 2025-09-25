export function initProdigi({ apiKey, containerId }) {
    const container = document.getElementById(containerId);

    fetch('https://api.prodigi.com/v4/products', {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        container.innerHTML = data.products.map(p => `
            <div class="product">
                <h3>${p.name}</h3>
                <img src="${p.image}" alt="${p.name}" />
                <p>${p.price} ${p.currency}</p>
            </div>
        `).join('');
    })
    .catch(err => {
        console.error('Błąd pobierania produktów:', err);
        container.innerHTML = '<p>Nie udało się pobrać produktów.</p>';
    });
}
