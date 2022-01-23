import React from 'react';

const Friend = (props) => {
    const {name, email,address,website,phone}=props.friend;
    const friendStyle={
        fontweigt:'bold',
        padding:'10px',
        border: '3px solid red',
        borderRadius:'10px',
    }
    return (
        <div style={friendStyle}>
            <h1>Name:{name}</h1>
            <h2>Email:{email}</h2>
            <p>Adress: {address.street}</p>
            
        </div>
    );
};

export default Friend;