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
const customerType = "cip";

//Step 1:
let categoryDiscount
function getCategoryDiscount(category){
    
    switch (category) {
        case ("gear"): 
            return categoryDiscount = 0.1;
        case "apparel":
            return categoryDiscount = 0.15;
        case "snacks":
            return categoryDiscount = 0.08;
        case "access":
            return categoryDiscount = 0.05;
        default:
            return categoryDiscount = 0;
    }
};

//Step 2:
function priceAfterCategoryDiscount(product){
    return product.price*(1-(getCategoryDiscount(product.category)));
};

//Step 3:
function findProductById(id){
  return (products.find(p => p.id === id)) || null;
};

//Step 4:
function lineItemTotal(cartItem){
    let product = findProductById(cartItem.productId);
    if (!product || cartItem.qty <= 0) 
        return 0;
    return cartItem.qty * priceAfterCategoryDiscount(product);
};

//Step 5:
function orderSubtotal(cart){
    return cart.reduce((sum, item) => sum + lineItemTotal(item), 0);
};

//Step 6:
function customerAdjustmentRate(customerType){
    switch (customerType) {
        case ("student"): 
            return 0.03;
        case "member":
            return 0.05;
        case "VIP":
            return 0.1;
        default:
            return 0;
    }
};

//Step 7:
function orderTotal(cart,customerType){
    let subtotal = orderSubtotal(cart);
    let rate = customerAdjustmentRate(customerType);
    return subtotal*(1-rate);
};

//Step 8:
function formatCurrency(amount){
    return "$" + amount.toFixed(2);
};

//Step 9: 
function printReceipt(cart, customerType){
    console.log("Receipt: ")
    for (let item of cart){
        let product = findProductById(item.productId)
        if(!product) continue;

        let discountedUnitPrice = priceAfterCategoryDiscount(product);
        let lineTotal = lineItemTotal(item);

        console.log(`${product.name} (x${item.qty})`);
        console.log(`Unit Price: ${formatCurrency(discountedUnitPrice)}`);
        console.log(`Line Total: ${formatCurrency(lineTotal)}`);
    }

    let subtotal = orderSubtotal(cart);
    let adjustmentRate = customerAdjustmentRate(customerType);
    let total = orderTotal(cart, customerType);

    console.log("")
    console.log(`Subtotal: ${formatCurrency(subtotal)}`);
    console.log(`CustomerAdjustment (${(adjustmentRate *100).toFixed(0)}%): -${formatCurrency(subtotal*adjustmentRate)})`);
    console.log(`Final Total: ${formatCurrency(total)}`);

};

printReceipt(cart, customerType);



