const inventario = new Inventario();

const agregar = document.getElementById("btnAgregar");
agregar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").value;
	let nombre = document.getElementById("nombre").value;
	let cantidad = document.getElementById("cantidad").value;
	let costo = document.getElementById("costo").value;	
	if(codigo === "" || nombre === "" || cantidad === "" || costo === "") {
		document.getElementById('resultado').innerHTML = "<p>Favor de rellenar todos los campos.</p>"
	} else {
		document.getElementById('resultado').innerHTML = `<p>${inventario.agregar(new Producto(codigo, nombre, cantidad, costo))}</p>` 
	}
});

const buscar = document.getElementById("btnBuscar");
buscar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").value;
	let producto = inventario.buscar(codigo);
	if(producto !== null) {
		document.getElementById('resultado').innerHTML = producto.infoHTML();
	} else {
		document.getElementById('resultado').innerHTML = "<p>El producto no existe.</p>";
	}
});

const eliminar = document.getElementById("btnEliminar");
eliminar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").value;
	document.getElementById('resultado').innerHTML = inventario.eliminar(codigo)
});

const listar = document.getElementById("btnListar");
listar.addEventListener('click', () => {
	document.getElementById('resultado').innerHTML = inventario.listar();
});

const listarInverso = document.getElementById("btnListarInverso");
listarInverso.addEventListener('click', () => {
	document.getElementById('resultado').innerHTML = inventario.listarInvertido();
});
