import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';

const UserList = ({ users }) => (
  <>
    <ListGroup>
      { users.map( u => 
        <ListGroup.Item key={u.id}>
          {u.fname} {u.lname}
          <Link to={`/users/${u.id}`}>
            <Button variant="info">Show</Button>
          </Link>
        </ListGroup.Item>
      )}
    </ListGroup>
  </>
)

export default UserList