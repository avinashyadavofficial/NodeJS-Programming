class Product {
    constructor(price) {
      this._price = price; 
    }
  
    get price() {
      return this._price; // Internal value (convention: use _)
    }
  
    set price(value) {
      this._price = value;
    }
  }
  
  const p = new Product(100);
  
  console.log(p.price);  
  p.price = 200;        
  console.log(p.price);  
  