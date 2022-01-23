import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, email,address,website,phone}=props.friend;
    const navigate  = useNavigate();
   
    const friendStyle={
        fontweigt:'bold',
        padding:'10px',
        border: '3px solid red',
        borderRadius:'10px',
    }
    const url=`/friend/${id}`;
    const handleFriendClick = () =>{
        navigate(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h1>Name:{name}</h1>
            <h2>Email:{email}</h2>
            <p>Adress: {address.street}</p>
            <Link to={url}>Visit me</Link>
            <Link to={url}> <button>Visit Me</button></Link>
            
            <button onClick={handleFriendClick}>Visit Me 2</button>
            
        </div>
    );
};

export default Friend;