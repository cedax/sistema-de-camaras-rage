/*
* Este archivo recibe las llamadas de vistas y las procesa, en un futuro se podria
* agregar un archivo que controle las llamadas de cada carpeta dentro de la carpeta 'cliente'
* y llamar a todos esos archivos desde este, ahora mismo no tiene caso hacerlo.
*/

const util = require('./../cUtil');

mp.events.add('cVerCamara', (x, y, z, rx, ry, rz, viewangle) => {
    util.cGuardaPosicionDeCamara(x, y, z, rx, ry, rz, viewangle);
    mp.events.callRemote('sPosicionDeJugador');
})

mp.events.add('cGuardaPosicion', (posicion) => {
	util.cGuardaPosicionDeJugador(posicion);
    util.cCerrarCef();
    util.cCrearCamara();
});