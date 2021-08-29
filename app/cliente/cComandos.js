/*
* Este archivo controla todo lo referente a comandos
*/

const player = mp.players.local;
const util = require('./cUtil');

mp.events.add("playerCommand", (command) => {
    const args = command.split(/[ ]+/)
    const commandName = args[0]
    args.shift();

    if (commandName === "camaras") {
        //Aqui podriamos agregar comprobaciones de si el jugador tiene camaras y cuales tiene
        //para asi cargarlas en el CEF de camaras
        util.cPrepararCef();
        util.cAbrirCef("package://Vistas/Camaras/index.html");
    }else if(commandName === "cerrar") {
        util.cEliminarCamara();
        player.setAlpha(255);
    }
})
