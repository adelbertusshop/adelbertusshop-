// plik: api/hoplixHandler.js

export default async function handler(req, res) {
  // Sprawdzenie metody żądania
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Pobieramy dane z body żądania
    const { orderId, product, quantity } = req.body;

    if (!orderId || !product || !quantity) {
      return res.status(400).json({ message: 'Missing parameters' });
    }

    // Tu dodasz kod integracji z API Hoplix
    // Poniżej tylko przykładowa symulacja odpowiedzi
    const hoplixResponse = {
      status: 'success',
      orderId,
      message: `Zamówienie dla ${quantity}x ${product} zostało przyjęte do Hoplix`
    };

    return res.status(200).json(hoplixResponse);
  } catch (error) {
    console.error('Błąd Hoplix API:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
