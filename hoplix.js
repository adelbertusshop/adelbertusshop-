// hoplix.js
export async function initHoplix({ apiKey, containerId }) {
    const container = document.getElementById(containerId);
    if (!container) return console.error('Nie znaleziono kontenera');

    try {
        // To samo co w testowym fetch
        const res = await fetch('https://api.hoplix.com/products', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        const products = await res.json();
        console.log('Produkty Hoplix:', products); // tak jak w testowym

        // szybki podgląd na stronie
        container.innerHTML = products.map(p => `
            <div>
                <h4>${p.name}</h4>
                <p>${p.price} PLN</p>
            </div>
        `).join('');

    } catch (err) {
        console.error('Błąd Hoplix:', err);
        container.innerHTML = '<p>Nie udało się pobrać produktów z Hoplix</p>';
    }
}
