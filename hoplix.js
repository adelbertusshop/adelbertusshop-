fetch('https://api.hoplix.com/products', {
  headers: { 'Authorization': 'Bearer d1d96cecde75ed33a6a4fa3f7e00fb1e' }
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
