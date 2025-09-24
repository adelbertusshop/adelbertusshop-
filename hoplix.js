// hoplix.js

export function initHoplix({ apiKey, containerId }) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Nie znaleziono kontenera Hoplix!");
        return;
    }

    // Na razie wrzucamy prosty tekst (dla testu)
    container.innerHTML = `
        <div style="padding: 20px; border: 2px solid gold; color: gold; background: black; border-radius: 10px;">
            <h2>HopliX działa!</h2>
            <p>Używam klucza: <strong>${apiKey}</strong></p>
        </div>
    `;
}
