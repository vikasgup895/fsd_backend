import React from 'react'
import axios from 'axios'
 import "./Register.css";


const Register = () => {
    const handleregister = async (e) => {
        e.preventDefault();
        
        // Extract values from form inputs
        const name = e.target.name.value;
        const age  = e.target.age.value;

        // Create a user object with name and age
        const user = { name, age };

        // Send the POST request with the user object
        await axios.post('http://localhost:9000/users', user);
        
        // Alert when user is successfully registered
        alert('User registered successfully');
    };

    return (
        <div>
          <h2 style={{textAlign : "center" }}>User Register</h2>

            <form onSubmit={handleregister}>
                <label>
                    Name : 
                    <input type='text' name='name' />
                </label>
                <label>
                    Age : 
                    <input type='number' name='age' />
                </label>

                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register;
