import { Product } from "./Products";

export class SimpleDataSource{
    private products:Array<Product>;
    constructor(){
        this.products=new Array<Product>(
            new Product(1,"iphone5s","Phone",700),
            new Product(2,"iphone6s","phone",900),
            new Product(3,"iphone7s","phone",1300),
            new Product(4,"iphone8s","phone",1400),
            new Product(5,"iphonex","phone",1900)
        )
    }
    getProducts():Product[]{
        return this.products;
    }
}