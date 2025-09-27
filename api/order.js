export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const response = await fetch("https://api.prodigi.com/v4.0/Orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.PRODIGI_API_KEY, // klucz produkcyjny
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);

  } catch (error) {
    res.status(500).json({ error: "Błąd serwera", details: error.message });
  }
}
