import React from "react";
import Product from "./Product";

const Home = () =>{
 const products =[
    {
        name: 'iPhone',
        image:'https://cdn.pixabay.com/photo/2017/07/03/19/26/iphone-2468714_1280.png',
        description : 'This is a sample product for an iPhone',
        price : 400.99,
        quantity:10
    },

    {
        name: 'Canon Camera',
        image:'https://cdn.pixabay.com/photo/2017/03/30/00/17/camera-2186901_1280.png',
        description:'This is a sample product description for a Canon Camera',
        price: 49.99,
        quantity : 5,
    
    },
    {
        name: 'Printer',
        image:'https://via.placeholder.com/150',
        description:'This is a sample product description for printer',
        price: 19.99,
        quantity: 20,

    }

 ] ;
 return(
    <div>
        <h1>Home Component</h1>
        {products.map((product,index) => (
           <Product
           key={index}
           name={product.name}
           image={product.image}
           description={product.description}
           price={product.price}
           quantity={product.quantity}
           />
        )

        )
        }
    </div>
 );;
 
};
export default Home;