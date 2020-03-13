import React, { useState } from 'react';
import User from '../User/User';
import userData from '../../userData';
import './Profile.css'
import Cart from '../Cart/Cart';

const Profile = () => {
    const userInfo = userData;
    const [users, setUsers] = useState(userInfo);
    const [cart, setCart]=useState([]);
    
    const handleAddContact =(contact)=>{
        const newContact = [...cart, contact];
        // console.log(newContact);
        setCart(newContact);
    }
    // console.log(cart);
    return (
        <div>
            <div className="profile-container">
                <div className="user-container">
                    {
                        users.map(user => <User user={user} handleAddContact={handleAddContact}></User>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart ={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Profile;