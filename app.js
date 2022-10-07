const inventario = new Inventario();

const agregar = document.getElementById("btnAgregar");
agregar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").valueAsNumber;
	let nombre = document.getElementById("nombre").value;
	let cantidad = document.getElementById("cantidad").value;
	let costo = document.getElementById("costo").value;	
	let estado = inventario.agregar(new Producto(codigo, nombre, cantidad, costo));
	if(codigo === "" || nombre === "" || cantidad === "" || costo === "") {
		document.getElementById('resultado').innerHTML = "<p>Favor de rellenar todos los campos.</p>"
	} else if(estado === true){
		document.getElementById('resultado').innerHTML = `<p>Se agrego el producto con el código: ${codigo}</p>`;
	} else if(estado === false){
		document.getElementById('resultado').innerHTML = '<p>El código del producto está repetido, ingrese otro</p>'
	}
});

const buscar = document.getElementById("btnBuscar");
buscar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").valueAsNumber;
	let producto = inventario.buscar(codigo);
	if(producto !== null) {
		document.getElementById('resultado').innerHTML = producto.infoHTML();
	} else {
		document.getElementById('resultado').innerHTML = "<p>El producto no existe.</p>";
	}
});

const eliminar = document.getElementById("btnEliminar");
eliminar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").valueAsNumber;
	let producto = inventario.eliminar(codigo);
	if(producto !== null) {
		document.getElementById('resultado').innerHTML = producto.infoHTML();
	} else {
		document.getElementById('resultado').innerHTML = '<p>El producto no existe</p>';
	}
});

const listar = document.getElementById("btnListar");
listar.addEventListener('click', () => {
	document.getElementById('resultado').innerHTML = `<p>${inventario.listar()}</p>` ;
});

const listarInverso = document.getElementById("btnListarInverso");
listarInverso.addEventListener('click', () => {
	document.getElementById('resultado').innerHTML = `<p>${inventario.listarInverso()}</p>`;
});

const limpiar = document.getElementById('btnLimpiar');
limpiar.addEventListener('click', () => {
	document.getElementById('frmProducto').reset();
	document.getElementById('resultado').innerHTML = "";
})
