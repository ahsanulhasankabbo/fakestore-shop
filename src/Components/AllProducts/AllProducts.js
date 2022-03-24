import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const AllProducts = (props) => {
    // console.log(props)
    const{setCart} = props;
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    // console.log(products)
    return (
        <div>
                <div className="row">
                {
                    products.map(product => <Products key={product.id} product={product} setCart={setCart}></Products>)
                }
                </div>
        </div>
    );
};

export default AllProducts;