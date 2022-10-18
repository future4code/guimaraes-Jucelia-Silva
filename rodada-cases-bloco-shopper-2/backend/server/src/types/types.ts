export type Product = {
    id: string,
    name: string,
    price: number,
    qty_stock: number
}

export type OrderItem = {
    id: string,
    prodName: string,
    amount: number
}