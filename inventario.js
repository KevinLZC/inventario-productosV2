class Inventario {
	constructor() {
		this.productos = [];
	}

	agregar(nuevo) {
		if(this.comprobarCodigo(nuevo.codigo)) {
			return this.ordenar(nuevo)
		} else {
			return "<p>El código del producto está repetido, ingrese otro.</p>"
		}
	}

	ordenar(nuevo) {
		if(this.productos.length === 0 || this.productos[this.productos.length - 1].codigo < nuevo.codigo) {
			this.productos.push(nuevo)
			return `Se agrego el producto con el codigo: <strong>${nuevo.codigo}</strong>`
		} 

		for(let i = 0; i < this.productos.length; i++) {
			if(nuevo.codigo < this.productos[i].codigo) {
				for(let j = this.productos.length - 1; j >= i; j--) {
					this.productos[j + 1] = this.productos[j]
				}
				this.productos[i] = nuevo
				return `Se agrego el producto con el codigo: <strong>${nuevo.codigo}</strong>`
			}
		}
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
		if(this.buscarIndice(codigo) !== -1) {
			return this.productos[this.buscarIndice(codigo)];
		} else {
			return null;
		}
	}

	buscarIndice(codigo) {
		if(this.productos.length === 1 && this.productos[0].codigo === codigo) {
			return 0;
		}

		let inicio = 0; 
		let final = this.productos.length - 1;

    while(inicio <= final) {
      let medio = Math.floor(( inicio + final ) / 2);
      if(this.productos[medio].codigo === codigo) {
				return medio;
			} else if(this.productos[medio].codigo > codigo){
				final = medio - 1;
			} else {
				inicio = medio + 1;
			}
		}
		return -1;
}

	eliminar(codigo) {
		let posicion = this.buscarIndice(codigo)
		if(posicion === -1) {
			return '<p>El producto no existe.</p>';
		}
		let tmp = this.productos[posicion]
		for(let j = posicion; j < this.productos.length - 1; j++) {
			this.productos[j] = this.productos[j+1]
		}
		this.productos[this.productos.length - 1] = tmp;
		this.productos.pop()
		return `<p>Se eliminó el producto con el código <strong>${codigo}</strong>.</p>`
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

