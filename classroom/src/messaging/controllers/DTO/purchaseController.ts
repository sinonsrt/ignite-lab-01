interface Customer {
  authUserId: string;
}

interface Product {
  id: string;
  title: string;
  slug: string;
}

interface PurchaseCreatedPayload {
  customer: Customer;
  product: Product;
}

export { Customer, Product, PurchaseCreatedPayload };
