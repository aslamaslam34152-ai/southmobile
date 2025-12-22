import React, { useState, useEffect } from "react";
import { data, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

function ProductDetails({ cartItems, setCartItems }) {

    const [product, setproduct] = useState('');
    const [qty, setQty] = useState(1);
    const { id } = useParams();

    const apiUrl = process.env.REACT_APP_API;
    console.log('productdetails');

    useEffect(() => {
        fetch(`${apiUrl}/product/${id}`)
            .then(res => res.json())
            .then((res) => {// console.log('dsdd',res);
                setproduct(res.data)
            })
            .catch((err) => { console.log('errr', err) })
    }, [])

    // useEffect(() => {
    //     fetch(`${apiUrl}/product/${id}`).then(res => res.json()).then((res) => {
    //         console.log('response', res)

    //         setproduct(res.data)
    //     }).catch(err => console.error('error', err))
    // }, [])


    function increaseQty() {
        if (product.stock == qty) {
            return;
        }
        setQty((state) => state + 1);
    }

    function decreaseQty() {
        if (qty > 1) {
            setQty((state) => state - 1);
        }
    }

    function addToCart() {
        const itemExist = cartItems.find((item) => item.product._id == product._id)
        if (!itemExist) {
            const newItem = { product, qty };

            setCartItems((state) => [...state, newItem]);
            toast.success("Cart Item added succesfully!")
        }
    }

    // console.log('aslam',product.images);





    return (
        <div className="container container-fluid">
            <div className="row f-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid" id="product_image">
                    <img src={product.images} alt="sdf" height="500" width="500" />
                </div>

                <div className="col-12 col-lg-5 mt-5">
                    <h3>{product.name}</h3>
                    <p id="product_id">Product #{product._id}</p>

                    <hr />




                    <hr />

                    <p id="product_price">${product.price}</p>
                    <div className="stockCounter d-inline">
                        <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                        <input type="number" className="form-control count d-inline" value={qty} readOnly />

                        <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                    </div>
                    <button type="button" onClick={addToCart} disabled={product.stock == 0} id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

                    <hr />

                    <p>Status: <span id="stock_status" className={product.stock > 0 ? 'text-success' : 'text-danger'}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

                    <hr />

                    <h4 className="mt-2">Description:</h4>
                    <p>{product.description}</p>
                    <hr />

                    <div className="rating w-50"></div>

                </div>

            </div>
        </div>
    )
}
export default ProductDetails;