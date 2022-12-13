class ProductManager {

    constructor(){
        this.products = []
    }

    getNextID = () => {
        const count = this.products.length
        return (count > 0) ? this.products[count -1].id + 1 : 1
    }

    validationCode = (code) =>{
        const producto = this.products.find(producto => producto.code === code)
        if(producto == undefined){
            return true;
        } else if(producto != undefined){ 
            console.log("Error: El codigo " +  code + " no puede repetirse");
            return false;
        }
    }

    validarCampos = (title, description, price, thumbnail, code, stock) =>{
        if((title== undefined || title=="") || (description == undefined || description == "") || (price == undefined ||price == "") || (thumbnail== undefined || thumbnail== "") || (code== undefined || code== "") || (stock == undefined || stock == "")){
            console.log("Todos los campos deben ser completados")
            return false;
        }else{
            return true;
        }
    }


    addProduct = (title, description, price, thumbnail, code, stock) => {

        if(this.validationCode(code)&& this.validarCampos(title, description, price, thumbnail, code, stock)){

            
            const product ={
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id:this.getNextID()
            }

            this.products.push(product)}


    }

    getProductByID = (id) => {
        const productFound = this.products.find(product => product.id === id)
        return productFound || console.log("Error: Not found")
    }
    

    getProducts = () => {return this.products}


}

const manager = new ProductManager ()

manager.addProduct("Aceites Esenciales", "Aceites Esenciales Puros, varias fragancias.", 500, "FotoProducto1.jpg", 1111, 10)
manager.addProduct("Sahumerios Artesanales", "Sahumerios Artesanales de Bambu, sin quimicos.", 400, "FotoProducto2.jpg", 2222, 10)
manager.addProduct("Velas Artesanales", "Velas de Soja, 100% Organicas", 400, "FotoProducto3.jpg", 3333, 10)

// console.log(manager.products);
console.log(manager.getProducts())
console.log(manager.getProductByID(3))
console.log(manager.getProductByID(4))