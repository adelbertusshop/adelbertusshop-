export async function fetchProdigiProducts() {
    try {
        const res = await fetch('https://api.prodigi.com/v4/catalog/products', {
            headers: {
                'Authorization': 'Bearer TWÓJ_PRODIGI_KEY'
            }
        });
        if (!res.ok) throw new Error('Błąd przy pobieraniu produktów');
        const data = await res.json();
        return data.products; // albo jak jest w Prodigi JSON
    } catch (err) {
        console.error(err);
        return [];
    }
}
