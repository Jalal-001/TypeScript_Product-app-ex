"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); }); //pushing an array of products from simpledatasource
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; //Geriye donen deyer array oldugu ucun [0]-ci indeksde dayanani qeyd edirik.
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = product.id;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var del = _a[_i];
            if (index == del.id) {
                this.products.splice(index - 1, 1);
            }
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var par = _a[_i];
            if (par.id != null) {
                key++;
            }
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
