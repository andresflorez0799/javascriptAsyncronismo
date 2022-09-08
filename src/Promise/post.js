import fetch from "node-fetch";

const api = 'https://api.escuelajs.co/api/v1';

const post = (url, data) =>{
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    });
};

const nuevo = {
    'title' : 'Nuevo producto AF',
    'price' : 129999,
    'description' : 'Example data post method',
    'categoryId' : 1,
    'images' : [
        'https://random.imagecdn.app/300/300',
        'https://random.imagecdn.app/250/250'
    ]
};

post(`${api}/products`, nuevo)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
