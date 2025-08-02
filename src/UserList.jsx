import React, { use, useEffect, useState } from 'react'

const UserList = () => {
    const[users,setUsers] = useState([])
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{
            setUsers(data)
            setLoading(false)
        })
        .catch(error => {
            console.error('API Error:',error)
            setLoading(false)
        })
    },[])

    if(loading) return <p>Loading...</p>
  return (
    <div>
        <h2>UserList</h2>
        <ul>
            {users.map(user=>(
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserList