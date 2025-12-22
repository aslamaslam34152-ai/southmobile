import { Link } from 'react-router-dom';
 export default function ProductCard({product}){
  // console.log('po',product.images[0].image)

  // src={product?.images[0]?.image || '' }

  console.log('asas',product.images);
  

    return(

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          {product &&
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src={product.images}
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">{product.name}</a>
              </h5>
              
              <p class="card-text text-success fs-5">${product.price}</p>
              <Link to={`/products/${product._id}`}  className="btn btn-outline-primary mt-auto" >
                 View Details
               </Link>
              
            </div>
          </div>}
        </div>
    
     
    )
}

// import { Link } from 'react-router-dom';

// export default function ProductCard({ product }) {
//   if (!product) return null;

//   return (
//     <div className="col-sm-12 col-md-6 col-lg-3 my-3">
//       <div className="card h-100 shadow-sm border-0 rounded-4">
//         {/* Product Image */}
//         <img
//           className="card-img-top p-3 rounded-3"
//           src={product.images}
//           alt={product.name}
//           style={{ objectFit: 'cover', height: '200px' }}
//         />

//         <div className="card-body d-flex flex-column">
//           {/* Product Name */}
//           <h5 className="card-title text-primary fw-bold">
//             {product.name}
//           </h5>

//           {/* Product Price */}
//           <p className="card-text text-success fs-5">${product.price}</p>

//           {/* View Details Button */}
//           <Link
//             to={`/products/${product._id}`}
//             className="btn btn-outline-primary mt-auto"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
