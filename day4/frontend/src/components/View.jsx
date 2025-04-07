import React, { useEffect, useState } from 'react'
import axios from 'axios'

const View = () => {
    const [users, setUsers] = useState([])
    const handleviews = async () => {
        const res = await axios.get('http://localhost:9000/users');
        setUsers(res.data);
    }
    useEffect(() => {
        handleviews();
    }, [])


    return (
        <div style={{textAlign : "center" , fontSize :"18px"}}>

            <h2>View Registerd users</h2>
            <table border="1px" style={{width:'100%' , height : "100%", borderCollapse: "collapse", backgroundColor : 'yellowgreen' , border: '3px solid black'}}>
                <thead >
                    <tr >
                        <th >ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                {
                users.map((user) => (<tr key={user.id}>
                     <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
                ))
            }
                </tbody>
            </table>
        </div>
    )
}

export default View