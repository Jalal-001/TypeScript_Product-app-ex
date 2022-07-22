"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Products_1 = require("./Products");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Products_1.Product(1, "iphone5s", "Phone", 700), new Products_1.Product(2, "iphone6s", "phone", 900), new Products_1.Product(3, "iphone7s", "phone", 1300), new Products_1.Product(4, "iphone8s", "phone", 1400), new Products_1.Product(5, "iphonex", "phone", 1900));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
