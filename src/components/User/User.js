import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const {img, name, yearlyIncome, address, email, phone, website}=props.user;
     
    return (
        <div className="container">
            <div className="img-container">
                <img src={img} alt=""/>
            </div>
            <div className="data-container">
                <h3>{name}</h3>
                <p>Email:<span className="dataStyle">{email}</span></p>
                <p>Phone: <span className="dataStyle">{phone}</span></p>
                <p>Address : <span className="dataStyle">{address.suite+", "+address.street+", "+address.city+"."}</span> </p>
                <p>Website : <span className="dataStyle">{website}</span> </p>
                <p>yearlyIncome : <span className="dataStyle">${yearlyIncome}</span> </p>
                <button onClick={()=>props.handleAddContact(props.user)} className="contact"> <FontAwesomeIcon icon={faUserPlus} />Contact</button>
            </div>
            
        </div>
    );
};

export default User;