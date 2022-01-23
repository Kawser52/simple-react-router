import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const FriendDetail = () => {
    const {friendID}= useParams(); 
    const [user,setUser]=useState({});
    useEffect(()=>{
        const apiUrl=`https://jsonplaceholder.typicode.com/users/${friendID}`;
        fetch(apiUrl)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            <h2>Frriend Detial Comming Soon</h2>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <p>{user.company?.name}</p>
        </div>
    );
};

export default FriendDetail;