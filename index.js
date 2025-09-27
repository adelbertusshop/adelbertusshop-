async function makeOrder() {
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

  const res = await fetch("/api/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData)
  });

  const result = await res.json();
  console.log("Odpowiedź Prodigi:", result);
  alert("Sprawdź konsolę (F12) – masz odpowiedź z Prodigi ✅");
}
