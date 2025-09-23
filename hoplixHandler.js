export default async function handler(req, res) {
  if (req.method === "POST") {
    const { orderId, product, quantity } = req.body;

    // Tutaj robisz połączenie z Hoplix API, np. fetch
    // Zamiast URL_HOPLIX i KLUCZE wstaw swoje zmienne środowiskowe

    try {
      const response = await fetch("https://api.hoplix.com/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "HOPIX_KEY1": process.env.HOPIX_KEY1,
          "HOPIX_KEY2": process.env.HOPIX_KEY2
        },
        body: JSON.stringify({ orderId, product, quantity })
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Błąd połączenia z API", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Metoda nieobsługiwana" });
  }
}
