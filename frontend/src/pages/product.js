import React, { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";

function Product() {
  const apiUrl = process.env.REACT_APP_API;

  const [products, setproducts] = useState([]);
  console.log('process.env.REACT_APP_AP', apiUrl)
  useEffect(() => {
    fetch(apiUrl + '/product')
      .then(res => res.json())

      .then((res) => {
        setproducts(res.data)
        console.log('res', res)
      })
  }, [])
  return (
    <div>

      {/* section */}


      <section id="products" class="container mt-5">
        <div className="row">
          {/* <ProductCard /> */}
          {products.map(product => <ProductCard key={product._id} product={product} />)}
          {/* {products.map(product => <ProductCard product={product}/>)} */}

        </div>
      </section>
    </div>
  )
}
export default Product;