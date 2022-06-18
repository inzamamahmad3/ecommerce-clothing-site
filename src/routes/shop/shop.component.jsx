

import "./shop.styles.scss"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-cart/product-cart.component"
const Shop = ()=>{
    // These Products are from context files hardcoded:
    const {products} = useContext(ProductsContext)
    return (
        <div className="products-container">
            {
                products.map( (product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))
            }
        </div>
    )

}

export default Shop;