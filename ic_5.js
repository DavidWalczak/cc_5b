// Esports Arena catalog (price per unit)
const products = [
  { id: 201, name: "Pro Mouse (wired)",   category: "gear",    price: 39.99 },
  { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
  { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
  { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
  { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
];

// Example cart (product & quantity)
const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

// Try: "regular", "student", "member", or "vip"
const customerType = "member";

//Step 1:
let categoryDiscount
function getCategoryDiscount(category){
    
    switch (category) {
        case ("gear"): 
            return categoryDiscount = 0.1;
            break;
        case "apparel":
            return categoryDiscount = 0.15;
            break;
        case "snacks":
            return categoryDiscount = 0.08;
            break;
        case "access":
            return categoryDiscount = 0.05;
            break;
        default:
            return categoryDiscount = 0;
            break;
    }
};

//Step 2:
function priceAfterCategoryDiscount(product){
    getCategoryDiscount(product.category);
    return productPriceAfterDiscount = product.price*(1-categoryDiscount);
};

//Step 3:
function findProductById(id){
    
};

//Step 4:
function lineItemTotal(cartItems){

};

//Step 5:
function orderSubtotal(cart){

};

//Step 6:
function customerAdjustmentRate(customerType){

};

//Step 7:
function orderTotal(cart,customerType){

};

//Step 8:
function formatCurrenycy(amount){

};

//Step 9: 
function printReceipt(cart, customerType){

};



