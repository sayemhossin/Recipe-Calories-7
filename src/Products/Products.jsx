import { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {

const [products,setProducts]= useState([])
useEffect(()=>{
    fetch('FakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {
                products.map(product => <Product key={product.recipe_id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;