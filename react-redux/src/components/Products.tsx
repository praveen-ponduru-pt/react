import { useSelector } from "react-redux";
import {  selectProducts, type Product } from "../store/slices/productSlice";
const Products = () => {
    const productList = useSelector(selectProducts);
    return (
        <>
            <div>
                {
                    productList.map((product: Product) => {
                        return (
                            <div key={product.id} >
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}

export default Products;