import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, email,address,website,phone}=props.friend;
    const friendStyle={
        fontweigt:'bold',
        padding:'10px',
        border: '3px solid red',
        borderRadius:'10px',
    }
    const url=`/friend/${id}`;
    return (
        <div style={friendStyle}>
            <h1>Name:{name}</h1>
            <h2>Email:{email}</h2>
            <p>Adress: {address.street}</p>
            <Link to={url}>Visit me</Link>
            
        </div>
    );
};

export default Friend;