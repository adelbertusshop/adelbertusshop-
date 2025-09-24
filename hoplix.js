// hoplix.js

export function initHoplix({ apiKey, containerId }) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Nie znaleziono kontenera Hoplix!");
        return;
    }

    // Pobieramy produkty z API Hoplix
    fetch("https://api.hoplix.com/v1/products", {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        if (!data || !Array.isArray(data.products)) {
            container.innerHTML = "<p>Brak produktów do wyświetlenia.</p>";
            return;
        }

        // Render produktów
        container.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">Produkty Hoplix</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${data.products.map(product => `
                    <div class="p-4 border rounded-lg shadow bg-white text-black">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded">
                        <h3 class="text-lg font-semibold mt-2">${product.name}</h3>
                        <p class="text-sm text-gray-600">${product.description || "Brak opisu"}</p>
                        <p class="mt-2 font-bold">${product.price} PLN</p>
                        <button class="mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                            Kup teraz
                        </button>
                    </div>
                `).join("")}
            </div>
        `;
    })
    .catch(err => {
        console.error("Błąd API Hoplix:", err);
        container.innerHTML = "<p>Nie udało się pobrać produktów z Hoplix.</p>";
    });
}
