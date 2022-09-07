
const promise = new Promise((resolve, reject) => {
    resolve("todo ok, se completo el proceso");
});

const cows = 10;

const countCows = new Promise((resolve, reject) => {

    if(cows >= 15) {
        resolve("Tenemos suficientes vacas aun en la granja!");
    }else{
        reject("No hay suficientes vacas");
    }

});

countCows
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => console.error(error))
.finally(() => console.log("Listo, se ha terminado toda la peticion"));
