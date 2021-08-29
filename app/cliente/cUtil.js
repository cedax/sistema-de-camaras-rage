/*
* Este archivo contiene cosas utiles para el funcionamiento del servidor, las separo aqui
* por que en un futuro podrian servir para mas sistemas
*/

let cef = null;
let camara = null;
const player = mp.players.local;
let posicionDelJugador = null;
let posicionDeCamara = null;

//Utilidades generales
function cGuardaPosicionDeJugador(posicion) {
	posicionDelJugador = {
		"x": posicion.x,
		"y": posicion.y,
		"z": posicion.z
	};
}
exports.cGuardaPosicionDeJugador = cGuardaPosicionDeJugador;

//Utilidades de CEF
function cPrepararCef(blurred = null) {
    setTimeout(() => { mp.gui.cursor.show(true, true); }, 500);
	mp.game.ui.displayRadar(false);
	mp.gui.chat.show(false);
	if (blurred) mp.game.graphics.transitionToBlurred(blurred);
}
exports.cPrepararCef = cPrepararCef;

function cAbrirCef(url) {
	if (cef) cef.destroy();
	cef = mp.browsers.new(url);
}
exports.cAbrirCef = cAbrirCef;

function cCerrarCef() {
	if (cef) { cef.destroy(); cef = null; }
	setTimeout(() => { mp.gui.cursor.show(false, false); }, 500);
	mp.game.ui.displayRadar(true);
	mp.gui.chat.show(true);
	mp.game.graphics.transitionFromBlurred(1);
}
exports.cCerrarCef = cCerrarCef;

//Utilidades de camara
function cGuardaPosicionDeCamara(x, y, z, rx, ry, rz, viewangle) {
	posicionDeCamara = {
		"x": x,
		"y": y,
		"z": z,
		"rx": rx,
		"ry": ry,
		"rz": rz,
		"viewangle": viewangle
	}
}
exports.cGuardaPosicionDeCamara = cGuardaPosicionDeCamara;

function cCrearCamara() {
	const arrayPosCam = {
		"x": posicionDeCamara.x,
		"y": posicionDeCamara.y,
		"z": posicionDeCamara.z,
	}
	player.setAlpha (0);
	mp.events.callRemote('sTeletransportarJugador', posicionDeCamara.x, posicionDeCamara.y, posicionDeCamara.z);
	camara = mp.cameras.new("Cam", arrayPosCam, {x: posicionDeCamara.rx, y: posicionDeCamara.ry, z: posicionDeCamara.rz}, posicionDeCamara.viewangle);
	camara.setActive(true);
	mp.game.cam.renderScriptCams(true, true, 20000000000000000000000000, false, false);
}
exports.cCrearCamara = cCrearCamara;

function cEliminarCamara() {
	if (!camara) return;
	camara.setActive(false);
	mp.game.cam.renderScriptCams(false, true, 0, true, true);
	camara.destroy();
	camara = null;
	mp.events.callRemote('sTeletransportarJugador', posicionDelJugador.x, posicionDelJugador.y, posicionDelJugador.z);
}
exports.cEliminarCamara = cEliminarCamara;

mp.events.add(
{
	"cPrepararCef" : execute => cPrepararCef(execute),
	"cAbrirCef" : () => cAbrirCef(),
    "cCerrarCef": () => cCerrarCef()
});