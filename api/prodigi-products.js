export default async function handler(req, res) {
    try {
        const response = await fetch('https://api.prodigi.com/products', {
            headers: {
                'Authorization': `Bearer ${process.env.PRODIGI_API_KEY}`
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Błąd pobierania produktów' });
        }

        const data = await response.json();
        res.status(200).json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Nie udało się pobrać produktów' });
    }
}
