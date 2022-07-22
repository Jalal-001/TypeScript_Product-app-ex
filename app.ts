import { Product } from "./Products";
import { ProductService } from "./ProductService";
let _productService=new ProductService();

let result1;
result1=_productService.getById(2);
console.log(result1);

let value1=_productService.generateId();
let a=new Product(value1,"lenova","laptop",1350);
let result2=_productService.saveProduct(a);

let value2=_productService.generateId();
let b=new Product(value2,"samsung t87","tv",4000);
let result3=_productService.saveProduct(b);

let result4=_productService.deleteProduct(result1);

let result5=_productService.getProducts();
console.log(result5);
