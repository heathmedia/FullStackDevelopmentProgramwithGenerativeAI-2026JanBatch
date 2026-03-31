// create react component for to access 
// product data from the backend and display it on the frontend
import  { useState, useEffect } from 'react';
import axios from 'axios';
const Product = () => {
const [products, setProducts] = useState([]);

// ES5 style of fetching product data from the backend using useEffect
//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error);
//       });
//   }, []);

// use useEffect to fetch product data from the backend using es6 syntax
  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
     
      {/* Display product data as pname, price and image with basic styling */ }

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

           {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />  
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}

        </div>
    </div>
    )
}
  


export default Product; 