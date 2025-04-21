import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handleDelete = async (e) => {
        e.preventDefault();
        const id = e.target.id.value
        await axios.delete(`https://fsd-backend-4u0y.onrender.com/users/${id}`)
        alert('User Deleted successfully')
      }
  return (
    <div>
        <h2 style={{textAlign : "center" }}>Delete User</h2>
      <form onSubmit={handleDelete}>
        <label>
          ID:
          <input type="text" name="id" />
        </label>
       
        <button type='submit'>Delete</button>
      </form>
    </div>
  )
}

export default Delete
