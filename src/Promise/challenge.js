import fetch from 'node-fetch';

const api = 'https://api.escuelajs.co/api/v1';

fetch(`${api}/products`)
.then(response => response.json())
.then(products => fetch(`${api}/products/${products[0].id}`))
.then(response => response.json())
.then(product => fetch(`${api}/categories/${product.category.id}`))
.then(response => response.json())
.then(category => console.log(category))
.catch(error => console.error(error))
.finally(() => console.log("Proceso terminado"));

