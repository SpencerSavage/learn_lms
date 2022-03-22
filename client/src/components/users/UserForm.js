import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ addUser, setAdd }) => {
  const [user, setUser] = useState({ fname: '', lname: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(user)
    setAdd(false)
    setUser({ fname: '', lname: '' })
  }

  return (
    <>
      <h1>Create User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='fname'
            value={user.fname}
            onChange={(e) => setUser({...user, fname: e.target.value })}
            type="text" 
            placeholder="First Name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='lname'
            value={user.lname}
            onChange={(e) => setUser({...user, lname: e.target.value })}
            type="text" 
            placeholder="Last Name" 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default UserForm;