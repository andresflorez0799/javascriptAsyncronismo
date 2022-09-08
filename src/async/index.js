
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)  
        ? setTimeout(() => { resolve('Async!!') }, 2000)
        : reject(new Error('Error!'));
    });
}

const anotherFunction = async () => {
    const algo = await fnAsync();
    console.log(algo);
    console.log('Mensaje en consola');
};

console.log('Antes');
anotherFunction();
console.log('Despues');
