import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './card.css'
function Card() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers()
    }, [])


    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res);
            setUsers(res.data)
        })
            .catch((err) => {
                console.log(err);
            })
    }


    return (

        <>
            <h1 className='mt-4'>USERS</h1>
            <div className='item-container'>
                {
                    users.map((user)=>(
                        <div class="card mt-5 ml-2 col-lg-3 shadow" style={{ width: "18rem",height:"20rem" }}>
                        <div class="card-body mt-4">
                            <h4 class="card-title ">Name : {user.name}</h4>
                            <p class="card-text mt-4"><strong>Email : </strong>{user.email}</p>
                            <p class="card-text"><strong>Website : </strong>{user.website}</p>
                            <a class="btn btn-primary mt-2 "><strong>Phone No : </strong>  {user.phone}</a>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card