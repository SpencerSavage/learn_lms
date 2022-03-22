import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserShow = () => {
  const [user, setUser] = useState({ fname: '', lname: '' })

  const { userId } = useParams()

  useEffect( () => {
    axios.get(`/api/users/${userId}`)
      .then( res => setUser(res.data ))
      .catch( err => console.log(err) )
  }, [])

  const { fname, lname } = user
  return(
    <>
      <h1>{fname} {lname}</h1>
      <button>Edit</button>
      <button>Delete</button>
    </>
  )
}

export default UserShow;