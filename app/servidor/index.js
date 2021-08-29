mp.events.addCommand("arma", (player, fullText, arma, municion) => {
    let armaHash = mp.joaat(arma);
    player.giveWeapon(armaHash, parseInt(municion) || 10000);
});

mp.events.addCommand("kill", (player) => { player.health = -1; });

function playerJoin(player) {
	console.log(`[SERVER]: ${player.name} se ha unido al servidor!`);
    player.notify(`~b~ ${player.name} ~w~has ingresado con exito`);
}

function playerDeath(player, reason, killer) {
	player.spawn(new mp.Vector3(-71.9208, -817.9440, 326.0485));
    killer ? console.log(`[INFO]: ${player.name} ha muerto a manos de ${killer} - razon: ${reason}`) : console.log(`[INFO]: ${player.name} ha muerto, razon: ${reason}`);
}

function sTeletransportarJugador(player, x, y, z) {
	player.spawn(new mp.Vector3(x, y, z));
}

function sPosicionDeJugador(player) {
	player.call('cGuardaPosicion', [player.position]);
}

mp.events.add(
{
	"sTeletransportarJugador" : (player, x, y, z) => sTeletransportarJugador(player, x, y, z),
	"sPosicionDeJugador" : player => sPosicionDeJugador(player),
    "playerDeath" : (player, reason, killer) => playerDeath(player, reason, killer),
    "playerJoin" : player => playerDeath(player),
});