// hoplix.js
export async function initHoplix({ apiKey, containerId }) {
    const container = document.getElementById(containerId);
    if (!container) return console.error('Nie znaleziono kontenera');

    try {
        const res = await fetch('https://api.hoplix.com/products', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!res.ok) throw new Error('Błąd połączenia z Hoplix API');

        const products = await res.json();

        if (products.length === 0) {
            container.innerHTML = '<p>Brak produktów do wyświetlenia</p>';
            return;
        }

        // render produktów w HTML
        container.innerHTML = products.map(p => `
            <div style="border:1px solid #ccc;padding:1rem;margin:1rem 0;">
                <h3>${p.name}</h3>
                <p>${p.price} PLN</p>
            </div>
        `).join('');

    } catch (err) {
        container.innerHTML = `<p>Nie udało się pobrać produktów z Hoplix</p>`;
        console.error(err);
    }
}
