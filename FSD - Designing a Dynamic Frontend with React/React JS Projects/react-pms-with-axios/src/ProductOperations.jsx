import axios from "axios";
import { useState } from "react";
function ProductOperation(){
let [products,setProducts]=useState([]);
let [error,setError]=useState("")
const URL="http://localhost:3000/products";

let loadProductsDetails = ()=> {
    // using fetch function 
    //fetch(URL).then(response=>response.json()).then(result=>console.log(result)).catch(error=>console.log(error)) 
    // using axios 
    //axios.get(URL).then(result=>console.log(result.data)).catch(error=>console.log(error))
    axios.get(URL).then(result=>setProducts(result.data)).catch(error=>setError(error.message))
}
    return(
        <div>
            <h2>Product Operation with Rest API using Axios</h2>
            <input type="button" value="Load Products" 
            onClick={loadProductsDetails}/>
            <p>Number of product are {products.length}</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.pname}</td>
                                    <td>{product.price}</td>
                                    <td>{product.qty}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
          
        </div>
    )
}

export default ProductOperation;