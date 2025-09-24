// hoplix.js
export async function initHoplix({ containerId }) {
    const container = document.getElementById(containerId);

    try {
        // Tutaj pobieramy produkty z backendu /api/hoplix
        const res = await fetch('/api/hoplix'); 
        if (!res.ok) throw new Error("Błąd połączenia z API");

        const products = await res.json();

        if (!products.length) {
            container.innerHTML = "<p>Brak produktów do wyświetlenia.</p>";
            return;
        }

        // Render produktów w kontenerze
        container.innerHTML = `
          <h2>Produkty z Hoplix</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            ${products.map(p => `
              <div style="border:1px solid #ccc; padding:1rem; border-radius:10px;">
                <img src="${p.image}" alt="${p.name}" style="width:100%; border-radius:8px;">
                <h3>${p.name}</h3>
                <p>Cena: ${p.price} PLN</p>
              </div>
            `).join('')}
          </div>
        `;
    } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Nie udało się pobrać produktów z Hoplix.</p>";
    }
}
