const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const puerto = 2000; // Puedes cambiarlo a 5080 si lo deseas

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    const respuesta = JSON.stringify({ nombre: 'Carlos Rippe', mensaje: '¡Hola desde mi servidor!' });
    res.end(respuesta);
});

servidor.listen(puerto, host, () => {
    console.log(chalk.green(`Servidor escuchando en http://${host}:${puerto}`));
});
