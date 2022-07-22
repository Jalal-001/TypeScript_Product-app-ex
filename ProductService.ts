import { IProductService } from "./IProductService";
import {Product} from "./Products";
import { SimpleDataSource } from "./SimpleDataSource";


export class ProductService implements IProductService{
    private dataSource:SimpleDataSource;
    private products:Array<Product>;
    constructor() {
        this.dataSource=new SimpleDataSource();
        this.products=new Array<Product>();
        this.dataSource.getProducts().forEach(p=>this.products.push(p)); //pushing an array of products from simpledatasource
       }
    getById(id: number):Product { 
       return this.products.filter(p=>p.id===id)[0]; //Geriye donen deyer array oldugu ucun [0]-ci indeksde dayanani qeyd edirik.
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {       
            this.products.push(product);
    }
    deleteProduct(product: Product): void {
        let index=product.id;
        for(let del of this.products){
            if(index==del.id){
                this.products.splice(index-1,1);
          }
        }
    }
   public generateId():number{
        let key=1;
        for(let par of this.products){
            if(par.id!=null){
                key++;
            }
        }
        return key;
    }
}
