const fs = require ('fs')

class ProductManager {

    constructor(path){
        this.path = path
    }

    //Leer Archivo
    read = async () => {
        if (fs.existsSync(this.path)){
            return fs.promises.readFile(this.path, 'utf-8').then(r=>JSON.parse(r))
        }
        return []       
    }

    //Generar Id Automatico
    getNextID = list => {
        const count = list.length
        return (count > 0) ? list[count -1].id + 1 : 1
    }

    //Escribir Archivo
    write = list =>{
        return fs.promises.writeFile(this.path, JSON.stringify(list))
    }

    //Obtener Productos
    getProducts = async () => {
        const data = await this.read()
        return data
    }

    //Agregar Productos
    addProduct = async (obj) => {
        const list = await this.read ()
        const nextID = this.getNextID(list)
        obj.id = nextID

        list.push (obj)
        await this.write(list)

    }

    //Actualizar Producto
    updateProduct = async (id, obj) =>{
        obj.id = id
        const list = await this.read ()

        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id){
                list[i] = obj
                break
            }
        }

        await this.write(list)
    }

    //Eliminar Producto
    deleteProduct = async (id) => {
        const list = await this.read ()
        const idDeleted = list.find(product => product.id === id)

    if (idDeleted) {
        const index = list.indexOf(idDeleted)
        list.splice(index,1);
        await this.write(list)
    }
}
}
module.exports = ProductManager