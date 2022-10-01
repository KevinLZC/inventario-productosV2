class Inventario {
	constructor() {
		this.productos = [];
	}

	agregar(nuevo) {
		if(this.comprobarCodigo(nuevo.codigo)) {
			this.productos.push(nuevo);
			return "<p>Se agregó correctamente.</p>"
		}
		
		return "<p>El código del producto está repetido, ingrese otro.</p>"
	}

	comprobarCodigo(codigo) {
		for(let i = 0; i < this.productos.length; i++) {
			if(codigo === this.productos[i].codigo) {
				return false;
			}
		}
		return true;
	}

	buscar(codigo) {
		for(let i = 0; i < this.productos.length; i++) {
			if(codigo === this.productos[i].codigo) {
				return this.productos[i];
			}
		}
		return null;
	}

	eliminar(codigo) {
		for(let i = 0; i < this.productos.length; i++) {
			if(codigo === this.productos[i].codigo) {
				let tmp = this.productos[i]
				for(let j = i; j < this.productos.length - 1; j++) {
					this.productos[j] = this.productos[j+1]
				}
				this.productos[this.productos.length - 1] = tmp;
				this.productos.pop()
				return `<p>Se eliminó el producto con el código <strong>${codigo}</strong>.</p>`
			}
		}
			return "<p>No existe el producto.</p>"
	}

	listar() {
		let listado = ""
		if(this.productos.length === 0) {
			return "<p>No existe ningún producto registrado.</p>"
		}
		for(let i = 0; i < this.productos.length; i++) {
			listado += this.productos[i].infoHTML();
		}
		return listado
	}

	listarInvertido() {
		let listado = ""
		if(this.productos.length === 0) {
			return "<p>No existe ningún producto registrado.</p>"
		}
		for(let i = this.productos.length - 1; i >= 0; i--) {
			listado += this.productos[i].infoHTML();
		}
		return listado
	}
}
