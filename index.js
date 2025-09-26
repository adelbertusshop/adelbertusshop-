import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  async function makeOrder() {
    setMessage("⏳ Wysyłam zamówienie...");

    const orderData = {
      shippingMethod: "Standard",
      recipient: {
        name: "Jan Kowalski",
        address: {
          line1: "Ulica 1",
          postalOrZipCode: "00-000",
          countryCode: "PL"
        }
      },
      items: [
        {
          sku: "GLOBAL-POSTER-A4",
          copies: 1
        }
      ]
    };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      });

      const result = await res.json();

      if (result.id) {
        setMessage(`✅ Zamówienie przyjęte! Numer: ${result.id}`);
      } else {
        setMessage("❌ Coś poszło nie tak. Sprawdź klucz API.");
      }
    } catch (err) {
      setMessage("❌ Błąd połączenia z serwerem.");
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Sklep z drukiem Prodigi</h1>
      <button onClick={makeOrder}>Złóż zamówienie testowe</button>
      <p>{message}</p>
    </div>
  );
}
