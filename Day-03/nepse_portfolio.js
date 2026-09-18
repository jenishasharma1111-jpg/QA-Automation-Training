
const orders = [
  { orderId: 201, symbol: 'NABIL', side: 'BUY', quantity: 15, price: 515, status: 'COMPLETED' },
  { orderId: 202, symbol: 'HBL', side: 'BUY', quantity: 10, price: 312, status: 'COMPLETED' },
  { orderId: 203, symbol: 'NICA', side: 'SELL', quantity: 8, price: 745, status: 'COMPLETED' },
  { orderId: 204, symbol: 'HDL', side: 'BUY', quantity: 12, price: 625, status: 'PENDING' },
  { orderId: 205, symbol: 'NABIL', side: 'SELL', quantity: 5, status: 'COMPLETED' }
];

// Create order labels
const orderLabels = orders.map(
  order => `${order.symbol} ${order.side} - ${order.status}`
);

console.log('Order Labels:', orderLabels);

// Get all BUY orders
const buyOrders = orders.filter(
  order => order.side === 'BUY'
);

// Get all completed orders
const completedOrders = orders.filter(
  order => order.status === 'COMPLETED'
);

// Find the first NABIL order
const firstNabilOrder = orders.find(
  order => order.symbol === 'NABIL'
);

// Calculate total value of orders with a valid price
const totalValue = orders
  .filter(order => order.price !== undefined)
  .reduce(
    (sum, order) => sum + (order.quantity * order.price),
    0
  );

// Find the first order with missing price
const missingPrice = orders.find(
  order => order.price === undefined
);

// Validate an order
function validateOrder(order) {
  if (order.price === undefined) {
    return `Order #${order.orderId} INVALID -> price is missing`;
  }

  if (order.quantity <= 0) {
    return `Order #${order.orderId} INVALID -> quantity must be greater than 0`;
  }

  if (order.price <= 0) {
    return `Order #${order.orderId} INVALID -> price must be greater than 0`;
  }

  return `Order #${order.orderId} VALID`;
}

// Calculate total value of completed BUY orders
const completedBuyValue = orders
  .filter(
    order =>
      order.side === 'BUY' &&
      order.status === 'COMPLETED' &&
      order.price !== undefined
  )
  .reduce(
    (sum, order) => sum + (order.quantity * order.price),
    0
  );

// Destructure the first order
const {
  orderId,
  symbol,
  side,
  quantity,
  price,
  status
} = orders[0];

// Display results
console.log(`
BUY Order Count: ${buyOrders.length}
Completed Order Count: ${completedOrders.length}
First NABIL Order ID: ${firstNabilOrder.orderId}
Total Order Value: Rs. ${totalValue}
Missing Price Order: #${missingPrice.orderId} ${missingPrice.symbol} Rs. ${missingPrice?.price ?? 'N/A'}
${validateOrder(missingPrice)}
Total Completed BUY Value: Rs. ${completedBuyValue}

First Order:
Order ID: ${orderId}
Symbol: ${symbol}
Side: ${side}
Quantity: ${quantity}
Price: Rs. ${price}
Status: ${status}
`);
