import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Admin() {
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editMode, setEditMode] = useState(null); 
    const [editedItem, setEditedItem] = useState({}); 

    
    useEffect(() => {
        const storeCart = localStorage.getItem('cart');
        if (storeCart) {
            setCart(JSON.parse(storeCart) || []);
        }
    }, []);

    
    const handleDel = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

   
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

   
    const handleEdit = (id) => {
        setEditMode(id);
        const itemToEdit = cart.find(item => item.id === id);
        setEditedItem({ ...itemToEdit });
    };

   
    const handleSave = (id) => {
        const updatedCart = cart.map(item => (item.id === id ? editedItem : item));
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setEditMode(null); 
    };

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    
    const filteredCart = cart.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <h1>Admin: Manage Cart</h1>
    {/* Search Input */}
            <div className="search-bar mb-4">
                <input
                    type="text"
                    placeholder="Search by name or category..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-[300px] p-[10px] border mb-[20px]"
                />
            </div>

            <div className="w-[100%] flex flex-wrap justify-evenly">
                {filteredCart.map((el) => (
                    <div className="w-[20%] border p-4" key={el.id}>
                        {editMode === el.id ? (
                            <>
                               
                                <input
                                    type="text"
                                    name="name"
                                    value={editedItem.name}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 border"
                                />
                                <input
                                    type="text"
                                    name="category"
                                    value={editedItem.category}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 border"
                                />
                                <input
                                    type="text"
                                    name="price"
                                    value={editedItem.price}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 border"
                                />
                                <input
                                    type="text"
                                    name="description"
                                    value={editedItem.description}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 border"
                                />
                                <button
                                    onClick={() => handleSave(el.id)}
                                    className="bg-green-500 text-white p-2">
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                {/* Display item details */}
                                <img src={el.image} alt="" className="w-[200px] h-[200px]" />
                                <h1>{el.name}</h1>
                                <h1>{el.category}</h1>
                                <h1>{el.price}</h1>
                                <h1>{el.description}</h1>
                                
                                {/* Edit and Delete buttons */}
                                <button
                                    onClick={() => handleEdit(el.id)}
                                    className="bg-gray-500 text-white p-2">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDel(el.id)}
                                    className="bg-red-500 text-white p-2 ml-2">
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Admin;
