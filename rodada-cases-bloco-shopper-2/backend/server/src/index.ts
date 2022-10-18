import app from "./app";
import deleteOrderItem from "./endpoints/deleteOrderItem";
import getAllProducts from "./endpoints/getAllProducts";
import getCartList from "./endpoints/getCartList";
import getProductById from "./endpoints/getProductById";
import postOrderItem from "./endpoints/postOrderItem";
import putItemAmount from "./endpoints/putItemAmount";
import putStock from "./endpoints/putStock";
import putStatus from "./endpoints/putStatus";

app.get('/products', getAllProducts)
app.post('/orderItem', postOrderItem)
app.get('/products/:id', getProductById)
app.get('/cart', getCartList)
app.put('/orderItem/:id', putItemAmount)
app.delete('/orderItem/:id', deleteOrderItem)
app.put('/order/:id', putStatus)
app.put('/products/:id', putStock)