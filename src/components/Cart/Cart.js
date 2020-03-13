import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //  console.log(cart.length);
    //  cart.map(income => console.log(Number(income.yearlyIncome)));
    const total = cart.reduce((total, user) => total + Number(user.yearlyIncome), 0);
    return (
        <div className="cart">
            <h2>Summary</h2>
            <h3>TotalUser:{cart.length} </h3>
            <h3>TotalIncome: ${total}</h3>
        </div>
    );
};

export default Cart;