import React from 'react';
import axios from 'axios';

const Update = () => {
        const handleupdate = async (e) => {
            e.preventDefault();
            const id = e.target.id.value
            const name = e.target.name.value
            const age = e.target.age.value
            const user = {name,age}
               
            await axios.put(`http://localhost:900/user/${id}` , user)
            alert('user update sucessfully')

        }

    return (
        <div>
            <h2 style={{textAlign : "center" }}>Update User</h2>
            <form onSubmit={handleupdate}>
                <label htmlFor="id">User ID:</label>
                <input type="text" id="id" name="id" required />

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />

                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
