export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch("https://api.sandbox.prodigi.com/v4.0/Orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from(process.env.PRODIGI_API_KEY + ":").toString("base64"),
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Błąd Prodigi:", error);
    return res.status(500).json({ message: "Coś poszło nie tak", error });
  }
}
