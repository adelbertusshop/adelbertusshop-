export default async function handler(req, res) {
  // Pobranie kluczy z zmiennych środowiskowych
  const key1 = process.env.HOPIX_KEY1;
  const key2 = process.env.HOPIX_KEY2;

  // Przykładowe użycie – możesz dostosować do API Hopix
  const response = await fetch('https://api.hopix.pl/endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key1}` // lub key2, w zależności od API
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}
