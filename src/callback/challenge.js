const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const api = 'https://api.escuelajs.co/api/v1';

function fetchData (urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);

    xhttp.onreadystatechange = function(event){
        // 1 = Loading, 2 = Send, 3 = Interactuando, 4 = completado
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${api}/products`, function (error, data) {
    if(error) return console.error(error);
    fetchData(`${api}/products/${data[0].id}`, function(error2, data2) {
        if(error2) return console.error(error2);
        fetchData(`${api}/categories/${data2?.category?.id}`, function(error3, data3){
            let nuevo = {
                data1: data[0],
                data2: data2.title,
                data3: data3.name
            };
            console.log(nuevo);
        });        
    });
});

