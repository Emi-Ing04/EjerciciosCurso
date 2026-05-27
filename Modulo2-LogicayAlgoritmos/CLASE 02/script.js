function saludar (name, callback){
    console.log('Hola', name);
    callback()
}

function despedir(){
    console.log('Adios');
}

saludar('Juan', despedir);

setTimeout(() => {
    console.log('Esto se ejecuta despues de 2 segundos');
}, 2000);

async function iniciar(){
    try //try es para intentar
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }  } 