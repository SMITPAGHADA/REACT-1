import React, { useEffect, useState } from 'react';
import foodData from '../db.json';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Home() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(foodData);
    }, []);

    const navigate = useNavigate();

    const handleAdd = (item) => {
        console.log('add to cart', item);
        
       
        const storedCart = localStorage.getItem('cart');
        let updatedCart = [];

       
        if (storedCart) {
            updatedCart = JSON.parse(storedCart);
        }

        
        updatedCart.push(item);

    
        localStorage.setItem('cart', JSON.stringify(updatedCart));

       
        navigate("/cart");
    };

    return (
        <>
            <Navbar />
            <h1>Welcome to our Food Delivery App</h1>
            <div className='w-[100%] flex flex-wrap justify-evenly'>
                {user.map((el) => {
                    return (
                        <div className='w-[20%] border' key={el.id}>
                            <img src={el.image} alt="" className="w-[200px] h-[200px]" />
                            <h1>{el.name}</h1>
                            <h1>{el.category}</h1>
                            <h1>{el.price}</h1>
                            <h1>{el.description}</h1>
                            <button className='bg-[#e9e5e5]' onClick={() => handleAdd(el)}>Add to Cart</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}



























