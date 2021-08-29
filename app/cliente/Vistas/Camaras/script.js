//Lo ideal es que esta informacion se traiga de una DB de camaras
const camaras = [
	{
		"Nombre": "Negocio",
		"Estado": "Perfecta",
		"x": 3223,
		"y": 5349,
		"z": 14,
		"rx": 0,
		"ry": 0,
		"rz": 218,
		"viewangle": 50
	},
	{
		"Nombre": "Casa",
		"Estado": "Perfecta",
		"x": 1223,
		"y": 2349,
		"z": 74,
		"rx": 0,
		"ry": 0,
		"rz": 218,
		"viewangle": 50
	}
]

//Este trozo de codigo recorre el array de camaras y las agrega a la lista del DOM
for (let i = 0; i < camaras.length; i++) {
	$("#camaras").html(`${$("#camaras").html()}
		<div class="card mt-4">
			<div class="card-body">
				<div class="row d-flex align-items-center">
					<div class="col-sm-4">
						<b>Nombre:</b> ${camaras[i].Nombre}
					</div>
					<div class="col-sm-4">
						<b>Estado:</b> ${camaras[i].Estado}
					</div>
					<div class="col-sm-4">
						<button @click="obervar('${i}')" class="btn btn-primary">Observar</button>
					</div>
				</div>
			</div>
		</div>
	`);
}


const app = new Vue({
	el: '#app',
	methods: {
		//Cierra la ventana de camras
		exit: function() {
			mp.trigger("cCerrarCef");
		},
		//Se ejecuta cuando seleccinas alguna camara, recibe el index de la misma para
		//ubicarla en el array de camaras
		obervar: function(e) {
			const callbackDatos = camaras[e];
			mp.trigger('cVerCamara', callbackDatos.x, callbackDatos.y, callbackDatos.z, callbackDatos.rx, callbackDatos.ry, callbackDatos.rz, callbackDatos.viewangle);
		},
	}
});