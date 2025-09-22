// plik: pages/hoplix.js

import { useState } from "react";

export default function HoplixPage() {
  const [orderId, setOrderId] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/hoplixHandler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, product, quantity }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ message: "Błąd połączenia z API" });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Test Hoplix API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Produkt"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Ilość"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Wyślij do Hoplix</button>
      </form>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h2>Odpowiedź API:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
