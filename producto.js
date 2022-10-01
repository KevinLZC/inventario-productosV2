class Producto {
	constructor(codigo, nombre, cantidad, costo) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.costo = costo;
	}

	info() {
		return `Código: ${this.codigo} - Nombre: ${this.nombre} - Cantidad: ${this.cantidad} - Costo: ${this.costo}`
	}

	infoHTML() {
		return `
			<p>
				Código: ${this.codigo}<br>
				Nombre: ${this.nombre}<br>
				Cantidad: ${this.cantidad}<br>
				Costo: ${this.costo}
			</p>`
	}
}
